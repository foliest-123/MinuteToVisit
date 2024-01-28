/*eslint-disable*/
import SectionCardTemplate from "./SectionCardTemplate";
import { db } from "../../firebase.config";
import { getDocs,collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import eventBus from "../eventBus";
const Restaurant = ({sectionName,title,searchedDocuments,searchedSnap}) => {
    const [restaurants,setRestaurantsSnap] = useState();

    // eventBus.on('getDocumentsFirbase',(data)=>{
    //     console.log(data.data())
    //     setRestaurantsSnap(data);
    // })

    useEffect(()=>{
        async function getRestaurants(){
            setRestaurantsSnap(await getDocs(collection(db,sectionName)));
        }
        getRestaurants();
        searchedSnap=null;
    },[sectionName])
   
    return ( 
        <Navbar>
        <div className="restaurant">
            {restaurants && <SectionCardTemplate title={title} restaurants={restaurants}/>}
        </div>
        </Navbar>
     );
}
 
export default Restaurant;