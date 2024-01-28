import {db} from '../firebase.config';
import geohash from "ngeohash";
import { collection, query, where, getDocs } from "firebase/firestore";

const GetGeoDocuments = async(latitude,longitude,distance,collectionName)=>{
    const lat = 0.0144927536231884; // degrees latitude per mile
    const lon = 0.0181818181818182; // degrees longitude per mile
  
    const lowerLat = latitude - lat * distance;
    const lowerLon = longitude - lon * distance;
  
    const upperLat = latitude + lat * distance;
    const upperLon = longitude + lon * distance;
  
    const lower = geohash.encode(lowerLat, lowerLon);
    const upper = geohash.encode(upperLat, upperLon);
  
    const q = query(collection(db, collectionName), where("geohash", ">=", lower),
    where("geohash", "<=", upper),where("approved","==",true));
  
    const docs = await getDocs(q);

    return docs;
}
 
export default GetGeoDocuments;