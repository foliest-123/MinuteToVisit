/* eslint-disable */
import React, {useState, useEffect,  createContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../signin";
export const UserContext = createContext({user: null})
export default (props) => {
  const [user, setuser] = useState(null)
  useEffect(() => {
        onAuthStateChanged(auth,async (user) => {
            if(user){
                const { displayName, email, photoURL }  = user;
                setuser({
                    displayName,
                    email,
                    photoURL
                })
            }
            else{
                setuser(null)
            }
        })
    },[])
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}