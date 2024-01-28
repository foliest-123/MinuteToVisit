/*eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils,faClapperboard,faCartShopping,faTree,faArrowRight, faHospital } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";
import urlSlug from "url-slug"
const CardTemplate = ({arr,title}) => {

    const icons = {
        Restaurants:faUtensils,
        Entertainments:faClapperboard,
        Shops:faCartShopping,
        Sites:faTree,
        Hospitals:faHospital
    }

    return ( 
        arr.map((item,index)=>{

            const slug = urlSlug(item.name);

            return(
                <Link to={`/${title.toLowerCase()}/${urlSlug(item.name)}`} state={item} key={index}>
                    <div className={styles.card_container}>
                        <img src={item.images[0]} alt="temp" />
                        <div className={styles.card_content}>
                            <p className={styles.city_type}>Salem {icons[title] && <FontAwesomeIcon icon={icons[title]}/>}</p>
                            <h2>{item.name}</h2>
                            <p className='content_short'>{item.address}</p>
                            <Link to={`/restaurant/${slug}`}><button className={styles.know_more}>Know more <FontAwesomeIcon icon={faArrowRight}/></button></Link>
                        </div>
                    </div>
                </Link>
            )
        })
     );
}
 
export default CardTemplate;