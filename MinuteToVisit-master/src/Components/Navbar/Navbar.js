import styles from "./navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils,faClapperboard,faCartShopping,faTree, faHospital, faAdd} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import { signInWithGoogle } from "../signin";
import { useScrollHandler } from "./useScrollHandler";
import { UserContext } from "../Provider/UserProvider";
import { useContext } from "react";
import UserProfileIcon from "./UserProfileIcon";

const Navbar = (props) => {

    const user = useContext(UserContext);
    const scroll = useScrollHandler();
    const searchedDocuments = (snap=>{
        snap.forEach(element => {
            console.log(element)
        });
    })
    return ( 
        <>
        <div className={styles.navbar_container + ` ${scroll ? styles.navonscroll : ""}`}>
            <div className={styles.navbar}>
                <Logo/>
                <div className={styles.nav_menus}>
                    <ul>
                        <NavLink to="/restaurants"><li><FontAwesomeIcon icon={faUtensils} />Restaurant</li></NavLink>
                        <NavLink to="/entertainments"><li><FontAwesomeIcon icon={faClapperboard} />Entertainment</li></NavLink>
                        <NavLink to="/shops"><li><FontAwesomeIcon icon={faCartShopping} />Shop</li></NavLink>
                        <NavLink to="/sites"><li><FontAwesomeIcon icon={faTree} />Sites</li></NavLink>
                        <NavLink to="/hospitals"><li><FontAwesomeIcon icon={faHospital} />Hospitals</li></NavLink>  
                        <NavLink to="/AddingData"><li><FontAwesomeIcon icon={faAdd} />Add Data</li></NavLink>  
                    </ul>
                </div>
                <SearchBar searchedDocuments={searchedDocuments}/>
                {
                    user ?<>
                    {/* <button onClick={SignOut}>Logout</button> */}
                    <UserProfileIcon/>
                    </> : <div className={styles.login_button}>
                    <button onClick={signInWithGoogle}>Login</button>
                    </div>
                }
            </div>
        </div>
        {
            props.children
        }
        </>
     );
}
 
export default Navbar;