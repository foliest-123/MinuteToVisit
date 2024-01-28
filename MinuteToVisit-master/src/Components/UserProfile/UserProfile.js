import styles  from "./userprofile.module.css";
import ProfileNavbar from "../Navbar/ProfileNavbar";
import { useContext } from "react";
import { UserContext } from "../Provider/UserProvider";
import SectionCardTemplate from "../Restaurant/SectionCardTemplate";
import { useEffect } from "react";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [favourites,setFavouritesSnap] = useState();
    useEffect(()=>{
        async function getFavourites(){
            setFavouritesSnap(await getDocs(collection(db,'restaurants')));
        }
        getFavourites();
    },[]);

    if(!user){
        navigate("/")
    }

    return ( 
        <ProfileNavbar>
        {
            user && 
            <div className={styles.user_profile_container}>
                <div className={styles.user_image}>
                    <img src={user.photoURL} alt="" />
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
            {favourites && <SectionCardTemplate className={styles.favourites_container} title={"Your Favourites"} restaurants={favourites}/>}
            </div>
        }
        </ProfileNavbar>
     );
}
 
export default UserProfile;