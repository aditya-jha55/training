import { Link } from "react-router-dom";
import { ROUTES } from "../Utils/constants";

export default function Header(){
    return(
        <nav>
            <ul>
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <li><Link to={ROUTES.SERVICES}>Services</Link></li>
                <li><Link to={ROUTES.PRODUCTS}>Products</Link></li>
                <li><Link to={ROUTES.ABOUT}>About</Link></li>
            </ul>
    </nav>
    )
}