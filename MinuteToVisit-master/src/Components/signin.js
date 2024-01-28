import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { app } from "../firebase.config";
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // console.log(result.user,credential,token);
    // ...
    window.alert("signin successfull");
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("ERROR CODE: "+errorCode);
    console.log("ERROR MESSAGE: "+errorMessage);
    console.log("ERROR EMAIL: "+email);
    console.log("ERROR CREDENTIAL: "+credential);
    // ...
  });
}

export const SignOut = ()=>{
    signOut(auth).then(() => {
        window.alert("signOut successfull");
      }).catch((error) => {
        // An error happened.
      });
}