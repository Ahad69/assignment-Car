import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import './SignUp.css'
import { toast } from "react-toastify";


const SignUp = () => {

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth , { sendEmailVerification: true });

  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  const [userAuth, loadingAuth, errorAuth] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, PasswordError] =
    useSendPasswordResetEmail(auth);

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
    await updateProfile({ displayName, photoURL });
  };


//   loading or error  

  if (loading || updating || loadingAuth) {
    return <div className="loader">
    <ScaleLoader  color= 'red' 
    size={150} />
    </div>;
  }
  // if (error || errorAuth || errorUpdate) {
  //   alert(error.message);
  // }
  const notify = () =>{
     toast('Reset Link Send to Your Email. Check It !' , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
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
      <div className="resetAndLink">
      <p>Already Register ? <Link to='/signin'>Click to login</Link> </p>
     <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Reset Password</button>
     </div>
      
      <div className="sign-buttons">
      

          <button className="sign-button" onClick={()=> signInWithGoogle
        ()}> <img width={20} src="https://i.ibb.co/8bx9v3d/google-logo-9824.png" alt="" /> Google</button> 
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/DKY32Pw/pngegg-2.png" alt="" /> Facebook</button>
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/F4w97S7/kindpng-2558173.png" alt="" /> GitHub</button>
      </div>
        </div>

       
    
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input
              type="text"
              name="email"
              onBlur={handleEmail}
              placeholder="Email"
            />
            </div>
            <div class="modal-footer">
            <button
                type="button"
                className="btn loginBtn"
                onClick={async () => {
                  sendPasswordResetEmail(email);
                  notify();
                }}
              >
                {
                  sending ? 'Sending Password ' : 'Send Password'
                }
                
              </button>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;
