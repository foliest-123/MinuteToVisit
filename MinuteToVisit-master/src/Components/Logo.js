import styles from "./Navbar/navbar.module.css";
import { NavLink } from "react-router-dom";
const Logo = () => {
    return ( 
        <div className={styles.logo}>
            <NavLink to="/"><b><span>M</span><span>2</span><span>V</span></b></NavLink>
        </div>
     );
}
 
export default Logo;