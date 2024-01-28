import styles from "./RestaurantDescription.module.css";
const PopularDishes = ({data}) => {

    return ( 
       <div className={styles.popular_section}>
            <h2>Popular Dishes</h2>
            <div className={styles.popular_dishes_container}>
            {
                data.popular.map((dish,index)=>(
                    <div className={styles.dish_container} key={index}>
                        <img src={dish.link} alt="" />
                        <p>{dish.name}</p>
                    </div>
                ))
            }
            </div>
       </div>
     );
}
 
export default PopularDishes;