import React, { useState } from "react";
import {
  createNewUserWithEmailAndPassword as signUp,
  signInWithValues as signIn,
} from "../util/firebase-util";

const defaultData = {
  email: "",
  password: "",
};
export default function SignInAndUp() {
  const [state, setState] = useState(defaultData);

  const changeHandler = (event) => {
    let { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const signUpHandler = () => {
    signUp(state.email, state.password);
  };

  const signInHandler = () => {
    signIn(state.email, state.password);
  };

  return (
    <div>
      <input
        type={"email"}
        onChange={changeHandler}
        name={"email"}
        required
        value={state.email}
      ></input>
      <input
        type={"password"}
        onChange={changeHandler}
        name={"password"}
        required
        value={state.password}
      ></input>
      <button onClick={signInHandler}>Login</button>
      <button onClick={signUpHandler}>SignUp</button>
    </div>
  );
}
