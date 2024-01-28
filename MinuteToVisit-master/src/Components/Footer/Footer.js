import Logo from "../Logo";
import styles from "../Navbar/navbar.module.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="footer">
            <Logo/>
            <p>&#169; 2022 All right reserved</p>
            <div className={styles.nav_menus}>
                <ul>
                    <NavLink to="/restaurant"><li>Restaurant</li></NavLink>
                    <NavLink to="/entertainment"><li>Entertainment</li></NavLink>
                    <NavLink to="/shop"><li>Shop</li></NavLink>
                    <NavLink to="/sites"><li>Sites</li></NavLink>
                    <NavLink to="/stay"><li>Stay</li></NavLink>  
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;