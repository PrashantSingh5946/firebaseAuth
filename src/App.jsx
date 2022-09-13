import "./App.css";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  logout,
  revalidate,
} from "../util/firebase-util";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  //Observer
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      setIsLoggedIn(true);
      setUser(user);
    } else {
      // User is signed out
      setIsLoggedIn(false);
      setUser();
    }
  });

  //SignIn handlers
  const googlePopupSignInHandler = () => {
    signInWithGooglePopup();
  };

  const googleRedirectSignInHandler = () => {
    signInWithGoogleRedirect();
  };

  const signOutHandler = () => {
    logout();
  };

  const reauthenticateHandler = () => {
    revalidate(user);
  };
  return (
    <div className="App">
      <button onClick={googlePopupSignInHandler}>Google Popup</button>
      <button onClick={googleRedirectSignInHandler}>
        Google redirect login
      </button>

      {isLoggedIn && (
        <>
          <button onClick={signOutHandler}>Sign Out</button>
          <button onClick={reauthenticateHandler}>
            Reauthenticate
          </button>
        </>
      )}
    </div>
  );
}

export default App;
