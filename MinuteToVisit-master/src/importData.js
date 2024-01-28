import data from "./JSON/restaurant.json";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase.config";
const Import = () => {
    const uploadHandler = (e)=>{
        e.preventDefault();
        console.log(data);
        // Add a new document with a generated id.
        data.map(async(obj)=>{
            await addDoc(collection(db, "hospitals"),obj);
        });
    }
    return ( 
        <form onSubmit={uploadHandler}>
            <button>Import</button>
        </form>
     );
}
 
export default Import;