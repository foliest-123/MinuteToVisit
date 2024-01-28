import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect } from 'react';
import GetGeoDocuments from "../GetGeoDocuments";
import { useNavigate } from 'react-router-dom';
// import eventBus from "../eventBus"
const SearchBar = ({searchedDocuments}) => {

    const navigate = useNavigate();

    useEffect(()=>{
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtcGF0aDA0IiwiYSI6ImNrcTNkNjJsejA0NjMycW50cWlkd29laTMifQ.b1-zGv3daR0_GT3zEyOqjg';
    const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood,district,address,poi'
    });

    if(document.getElementsByClassName("mapboxgl-ctrl").length === 0){
        geocoder.addTo('#geocoder');
    }
    
    // Add geocoder result to container.
    geocoder.on('result', async(e) => {
    //  console.log(JSON.stringify(e.result, null, 2));
     const coordinates = e.result.center;
     let collection = window.location.pathname.split("/")[1]
     if(window.location.pathname === '/'){
         collection="restaurants";
     }
     const docs = await GetGeoDocuments(coordinates[1],coordinates[0],7.45645,collection);
   
     if(window.location.pathname === '/'){
        searchedDocuments(docs);
        // eventBus.dispatch('getDocumentsFirbase',docs)
         window.setTimeout(()=>{
             navigate("/restaurants");
         },1000);
     }
        //  eventBus.dispatch('getDocumentsFirbase',docs)
        searchedDocuments(docs);
    });
    
   })
    return (
        <>
        <div id="geocoder"></div>
        </>
      );
}
 
export default SearchBar;