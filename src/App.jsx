import "./App.css";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../util/firebase-util";

function App() {
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
    </div>
  );
}

export default App;
