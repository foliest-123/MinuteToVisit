import Logo from "../Logo";
import { SignOut } from "../signin";
import styles from "../Navbar/navbar.module.css";
const ProfileNavbar = (props) => {
    return ( 
        <>
        <nav className={styles.profile_nav}>
             <Logo/>
             <div className={styles.login_button}>
                <button onClick={SignOut}>Logout</button>
             </div>
        </nav>
        {props.children}
        </>
     );
}
 
export default ProfileNavbar;