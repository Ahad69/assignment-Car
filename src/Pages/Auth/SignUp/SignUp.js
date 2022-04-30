import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import './SignUp.css'

const SignUp = () => {

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const [userAuth, loadingAuth, errorAuth] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (userAuth) {
      navigate(location.state?.from?.pathname || "/");
    }
  });

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setDisplayName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAvater = (event) => {
    setPhotoURL(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName, photoURL });
  };


//   loading or error  

  if (loading || updating || loadingAuth) {
    return <div className="loader">
    <ScaleLoader  color= 'red' 
    size={150} />
    </div>;
  }
  if (error || errorAuth || errorUpdate) {
    alert(error.message);
  }

  return (
    <div className="sign">
        <div className="sign-container">
        <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onBlur={handleName} placeholder="Name" />
        <br /><br />
        <input
          type="text"
          name="email"
          onBlur={handleEmail}
          placeholder="Email"
        />
        <br /><br />
        <input
          type="text"
          name="avater"
          onBlur={handleAvater}
          placeholder="Avater Link"
        />
        <br /><br />
        <input
          type="password"
          name="password"
          onBlur={handlePassword}
          placeholder="Password"
        />
        <br /><br />
        <input type="submit" value="Sign Up" />
      </form>
      <br /> <br />
      <p>Already Register ? <Link to='/signin'>Click to login</Link> </p>
      <div className="sign-buttons">
      

          <button className="sign-button" onClick={()=> signInWithGoogle
        ()}> <img width={20} src="https://i.ibb.co/8bx9v3d/google-logo-9824.png" alt="" /> Google</button> 
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/DKY32Pw/pngegg-2.png" alt="" /> Facebook</button>
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/F4w97S7/kindpng-2558173.png" alt="" /> GitHub</button>
      </div>
        </div>
    </div>
  );
};

export default SignUp;