/* eslint-disable */
import React, { Component, useEffect } from "react";
import {db} from '../firebase.config';
import geohash from "ngeohash";
import { collection, query, where, getDocs } from "firebase/firestore";

// Calculate the upper and lower boundary geohashes for
// a given latitude, longitude, and distance in miles
const getGeohashRange = (
  latitude,
  longitude,
  distance, // miles
) => {
  const lat = 0.0144927536231884; // degrees latitude per mile
  const lon = 0.0181818181818182; // degrees longitude per mile

  const lowerLat = latitude - lat * distance;
  const lowerLon = longitude - lon * distance;

  const upperLat = latitude + lat * distance;
  const upperLon = longitude + lon * distance;

  const lower = geohash.encode(lowerLat, lowerLon);
  const upper = geohash.encode(upperLat, upperLon);

  return {
    lower,
    upper
  };
};

function getPosition(){
  return new Promise((res,rej)=>{
    navigator.geolocation.getCurrentPosition(res,rej);
  })
}

const GeoLocation = ({nearByDocumentsHandler})=> {

    useEffect(()=>{ 
        async function userPosition(){
          const position = await getPosition();
          var crd = position.coords;
          // console.log("Your current position is:"); 
          // console.log(`Latitude : ${crd.latitude}`); 
          // console.log(`Longitude: ${crd.longitude}`); 
          // console.log(`More or less ${crd.accuracy} meters.`); 
          const { latitude, longitude } = crd;
          // console.log(latitude, longitude)
          const range = getGeohashRange(11.67474180, 78.12372850, 7.45645); // NEED TO USE USER LATLNG
          
          const resQuery = query(collection(db, "restaurants"), where("geohash", ">=", range.lower),
          where("geohash", "<=", range.upper));
          const sitesQuery = query(collection(db, "sites"), where("geohash", ">=", range.lower),
          where("geohash", "<=", range.upper));
          const shopsQuery = query(collection(db, "shops"), where("geohash", ">=", range.lower),
          where("geohash", "<=", range.upper));
          const entertainmentsQuery = query(collection(db, "entertainments"), where("geohash", ">=", range.lower),
          where("geohash", "<=", range.upper));
          const hospitalsQuery = query(collection(db, "hospitals"), where("geohash", ">=", range.lower),
          where("geohash", "<=", range.upper));
        
          const resQuerySnapshot = await getDocs(resQuery);
          const sitesQuerySnapshot = await getDocs(sitesQuery);
          const shopsQuerySnapshot = await getDocs(shopsQuery);
          const entertainmentsQuerySnapshot = await getDocs(entertainmentsQuery);
          const hospitalsQuerySnapshot = await getDocs(hospitalsQuery);

          nearByDocumentsHandler({
            restaurant:resQuerySnapshot,
            sites:sitesQuerySnapshot,
            shops:shopsQuerySnapshot,
            entertainments:entertainmentsQuerySnapshot,
            hospitals:hospitalsQuerySnapshot
          })
        }
        userPosition();
    },[])
    
    return (
      <>
      
      </>
    );
}
export default GeoLocation;