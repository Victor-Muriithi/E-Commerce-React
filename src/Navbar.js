import profilePic from "./images/image-avatar.png" ;
import cartsvg from "./images/icon-cart.svg";
import { cartContext } from "./context/cartContext";
import { useContext } from "react";


const Navbar = ({count, render, setRender}) => {
    const { cart } = useContext(cartContext);
    return ( 
      <nav className="navbar">
            <div className="logo">Sneakers</div>
            <div className="list">
                <ul>
                    <li>
                        <a href="#">Collections</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="pics" >
                <div className="svg" >
                <img 
                style={{
                    cursor:"pointer"
                }}
                src={cartsvg} alt="" onClick={()=>setRender(!render)} />
                </div>
            </div>
            <div className="number">
            {cart.length}
            </div>
            <div className="img">
                <img src={profilePic} />
            </div>
        </nav>

     );
}
 
export default Navbar;