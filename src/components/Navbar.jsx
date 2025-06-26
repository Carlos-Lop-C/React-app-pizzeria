import { Link } from "react-router-dom";
import style from './Styles/Navbar-styles.module.css'
 
export default function Navbar () {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={`${style["link-styles"]}`}>Home</Link>
                </li>
                <li>
                    <Link to = "/Owner" className={`${style["link-styles"]}`}>Owner</Link>
                </li>
            </ul>
        </nav>
    )
}