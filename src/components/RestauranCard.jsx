//import {RES_LOGO_URL} from "../utils/constants.js"
//Named Import
import { CDN_URL } from "../utils/constants";

//Inline styles - not preferred way
// const styleCard = {

//     backgroundColor: "#f0f0f0"
// }


const RestauranCard = (props) => {

    const { resData } = props;

    //We will destructure the data object
    const {
        cloudinaryImageId, 
        name, 
        avgRating,
        cuisines, 
    } = resData?.info;//optional chaining

    return(
        //<div className='res-card' style={styleCard}>
        <div className='res-card m-1 p-2 w-[230px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-300'>
            <img className='flex res-logo rounded-lg w-[200px] h-[200px]'
                src={CDN_URL+cloudinaryImageId} 
                alt='public/logo192.png'
            >
            </img>
            <h3 className="flex font-bold py-4 text-lg">{name}</h3>
            <h4 className="flex py-4">{cuisines.join(", ")}</h4>
            <h4 className="flex">{avgRating} stars</h4>
        </div>
    )
}

export default RestauranCard;