import HomeCard from "../HomeCard/HomeCard";
import styles from "../home.module.css";
import { Link } from "react-router-dom";
const HomeNear = ({nearbySnap,title,section}) => {
    const home_res = [];
  
    if(Object.keys(nearbySnap).length > 0){
        // console.log(section)
        section.forEach((doc) => {
        if(home_res.length < 4){
            home_res.push(doc.data());
        }
      });
    }

    return ( 
        <div className={styles.home_overview_container}>
            <h2 className={styles.card_layout_title}>{title} near you</h2>
            <HomeCard arr={home_res} title={title}/>
            <div className={styles.see_all}><Link to={`/${title.toLowerCase()}`}>see all &gt;</Link></div>
        </div>
     );
}
 
export default HomeNear;