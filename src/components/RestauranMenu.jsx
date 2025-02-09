//import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
//import { MENU_API } from "../utils/constants";
import useRestauranMenu from "../utils/useRestauranMenu";
import RestaurnCategory from "./RestauranCategory";
import { useState } from "react";

const RestauranMenu = () => {

    //Creating Custom hook from RestauranMenu.js to increase modularity and Single Responsibility Principle
    //Have created a custom Hook useRestauranMenu.js in utils that fetches data for this display
    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams(); //This will be taken from the path variable where createBrowserRoute was defined and it will be accessed from there
    //console.log(resId);

    //We have to now call this from the custom Hook
    const resInfo = useRestauranMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    /* This has now gone inside the custom hook
    useEffect(() => {
        const fetchMenu = async () => {
            try{
                const data = await fetch(MENU_API + resId);
                const json = await data.json();
                //To check if data is valid
                //console.log(json);
                setResInfo(json.data);
            }
            catch(error){
                console.error("Error fetching menu data: ", error);
            }
        }
        fetchMenu();
    }, [resId]);

    */

    if(resInfo === null)
        return <Shimmer />

    //The below info depends on the API so whenever API change please work on this again
    const { name, cuisines,  costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    //This was used before to display
    //const { itemCards } =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    //To check if we are getting correct data
    //console.log(itemCards);
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(', ')} = {costForTwoMessage}</p>
            {/**categories accordian */}
            {
                categories.map((category, index) => (
                    //controlled Components
                    //if the same index is clicked again, it resets to null (closing the accordion). setShowIndex((prevIndex) => (prevIndex === index ? null : index));
                    <RestaurnCategory 
                        key = {category?.card?.card?.categoryId} 
                        data = {category?.card?.card}
                        showItems = {index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
                    />
            ))}
            {/** This was used before to display
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) =>(
                        <li key = {item.card.info.id}>
                            {item.card.info.name} - {"Rs. "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                    ))
                }
            </ul>
            */}
        </div>
    )
}

export default RestauranMenu;