import CardTemplate from "./CardTemplate";
import styles from "./Card.module.css";
const HomeCard = ({arr,title}) => {
    return ( 
        <div className={styles.home_cards_layout}>
            <CardTemplate title={title} arr={arr}/>
        </div>
     );
}
 
export default HomeCard;