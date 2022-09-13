import "./App.css";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../util/firebase-util";
import {onAuthStateChanged} from 'firebase/auth'
import { useState } from "react";

function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false);

//Observer
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      setIsLoggedIn(true);
    } else {
      // User is signed out
      setIsLoggedIn(false);
    }});

  //SignIn handlers
  const googlePopupSignInHandler = () => {
    signInWithGooglePopup();
  };

  const googleRedirectSignInHandler = () => {
    signInWithGoogleRedirect();
  };


  return (
    <div className="App">
      <button onClick={googlePopupSignInHandler}>Google Popup</button>
      <button onClick={googleRedirectSignInHandler}>
        Google redirect login
      </button>

      {
        isLoggedIn && <button>Sign Out</button>
      }
    </div>
  );
}

export default App;
