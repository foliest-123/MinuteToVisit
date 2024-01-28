import { useState } from "react";
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";
const Restaurant = () => {
   
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState('');
    const [Section,setSection] = useState('Restaurants');
    const [city,setCity] = useState('Salem');
    const [name,setName] = useState("");

    const sectionChangeHandler = (e)=>{
        setSection(e.target.value)
    }

    const cityChangeHandler = (e)=>{
        setCity(e.target.value)
    }

    const nameChangeHandler = (e)=>{
        setName(e.target.value)
    }

    const handleImageFile = (e)=>{
        const image = e.target.files[0];
        setImageAsFile(() => (image));
    }
    
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('Uploading...')
        // async magic goes here...
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
          }
        const storage = getStorage();
        const storageRef = ref(storage, `${Section}/${city}/${name}/${imageAsFile.name}`);
        const metadata = {
            contentType: `${imageAsFile.type}`,
          };

        uploadBytes(storageRef, imageAsFile, metadata);

        window.setTimeout(()=>{
            getDownloadURL(ref(storage, `${Section}/${city}/${name}/${imageAsFile.name}`))
            .then((url) => {
                // `url` is the download URL
                alert("Image uploaded!!!");
                setImageAsUrl(url);
            })
            .catch((error) => {
                // Handle any errors
            });
        },2000)
    
      }

    return ( 
       <div className="upload_formContainer">
           
            <form onSubmit={handleFireBaseUpload} className="upload_form">
                <h1>Upload Image</h1>
                <p>Select Section</p>
                <select onChange={sectionChangeHandler} value={Section} required>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shops">Shop</option>
                    <option value="Sites">Sites</option>
                    <option value="Stay">Stay</option>
                </select>
                <p>Select City</p>
                <select onChange={cityChangeHandler} value={city} required>
                    <option value="Salem">Salem</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <p>Enter Name</p>
                <input type="text" className="enter_name" value={name} placeholder="Enter name..." onChange={nameChangeHandler} required/>
                <br />
                <p>Upload file</p>
                <input type="file" className="choose_file" onChange={handleImageFile} required/> <br />
                <div className="upload_firebase">
                    <button>Upload</button>
                </div>
            </form>
            {imageAsUrl && <div className="download_url">
                <h2>URL</h2>
                <a href={imageAsUrl} target="_blank" rel="noreferrer">{imageAsUrl}</a>
            </div>}
       </div>
     );
}
 
export default Restaurant;