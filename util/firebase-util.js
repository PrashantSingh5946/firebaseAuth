import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFoA17ShXfrhj_xz6bn5a_wLwFlW38r6M",
  authDomain: "auth-26b3b.firebaseapp.com",
  projectId: "auth-26b3b",
  storageBucket: "auth-26b3b.appspot.com",
  messagingSenderId: "978222892607",
  appId: "1:978222892607:web:f8e358656aa0ab2f0f5a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth provider could be any of them
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export const signInWithGooglePopup = async() =>{
    let result = await signInWithPopup(auth,provider);
    console.log(result);
}

export const signInWithGoogleRedirect = async() =>{
    let result = await signInWithRedirect(auth,provider);
    //gives no result but gives side effects
}