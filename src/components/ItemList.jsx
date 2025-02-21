import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch(); //This is from react-redux

    //console.log(items);
    const handleAddItem = (item) => {
        //Dispatch an action, and we need aceess to dispatch which we get from a hook called useDispatch
        //We will dispatch the action that we exported from the app store or the cart slice so we should first import that
        dispatch(addItem(item));//whatever will pass it will go as a payload --> action.payload
    }

    return (
        <div>
            {items.map(item => (
                <div key={item.card.info.id} className="p-2 m-2 h-40 border-gray-300 border-b-2 text-left flex justify-between items-center">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : "Price is not available for this item"}</span>
                        </div>
                        <p className="text-sm">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12 h-full flex items-center justify-center relative">
                        <div className="absolute top-1 left-1 z-10">
                            <button 
                                className="p-2 shadow-lg bg-black text-white mx-5 rounded-lg"
                                onClick={() => handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img 
                            className = " h-24 w-24 object-cover rounded-lg"
                            src= {item.card.info.imageId ? CDN_URL + item.card.info.imageId : "/Food-backup.jpg"} 
                            alt="Image not available" 
                            onError={(e) => e.target.src = "/Food-backup.jpg"}
                        /> 
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;