import CardTemplate from "../Home/HomeCard/CardTemplate";
import styles from "./Restaurant.module.css";
const RestaurantCardTemplate = ({restaurants,title,className}) => {
    const customcls = className ? className : "";
    const restaurantsArr = [];
    restaurants.forEach((doc) => {
        restaurantsArr.push(doc.data())
      });

    return ( 
        <div className={`${styles.restaurant_section_cards_container} ${customcls}`}>
            <div className={styles.restaurant_section}>
                <h2>{title}</h2>
                <div className={styles.restaurant_card_layout}>
                    <CardTemplate arr={restaurantsArr} title={title}/>
                </div>
            </div>
        </div> 
     );
}
 
export default RestaurantCardTemplate;