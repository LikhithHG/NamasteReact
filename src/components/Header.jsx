//import LOGO_URL from contants.js using named import
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //Selector is a Hook comes from react-redux library
    //This hook gives access to the store - gives access to what portion of the store we need the access
    //Subscribing to the part of the store
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    return(
        <div className="flex justify-between bg-white shadow-lg m-2">
            <div className='logo-container'>
                <img className='w-24 ' src={LOGO_URL} alt='public/logo192.png' />
            </div>
            <div className='flex items-center '>
                <ul className="flex p-4 m-4 text-black">
                    <li className="px-4"> {/** use the key in keyboard windows + . to get emojis */}
                        Online Status: {onlineStatus ? "🟢" : "🔴"} 
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart - ({cartItems.length}) Items</Link>
                    </li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <button
                        className="Login"
                        onClick={() => {
                            //Toggle Functionality
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                            //console.log(btnNameReact);
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

//We need to export this header
export default Header;