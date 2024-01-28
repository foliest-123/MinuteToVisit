import { UserContext } from "../Provider/UserProvider";
import { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const UserProfileIcon = () => {
    const user = useContext(UserContext);
   //  console.log(user)
    return ( 
        <div className={styles.user_profile_icon}>
           <Link to="/user/profile"><img src={user.photoURL} alt="" /></Link>
        </div>
     );
}
 
export default UserProfileIcon;