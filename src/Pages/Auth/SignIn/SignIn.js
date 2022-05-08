import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
import axios from "axios";





const SignIn = () => {
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const [showPassword , setShowPass] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const {data} =  await axios.post('https://gentle-fortress-49395.herokuapp.com/signup' , {email});

    localStorage.setItem('accessToken' , data.accessToken)
    console.log(data , email)
    // navigate(location.state?.from?.pathname || "/")
  };

  const notify = () =>{
    toast('Reset Link Send to Your Email. Check It ', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     });
 }



//   loading or error  

  if (loading || loadingAuth) {
    return <div className="loader">
        <ScaleLoader  color= 'red' 
    size={150} />
    </div>;
  }
  // if (error || errorAuth ) {
  //   alert(error.message);
  // }

  return (
    <div className="sign">
        <div className="sign-container">
        <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onBlur={handleEmail}
          placeholder="Email"
        />
        <br /><br />
        <input
         style={{position:'relative'}}
         type={showPassword ? "text" : 'password'}
          name="password"
          onBlur={handlePassword}
          placeholder="Password"
        />
         <span onClick={()=> setShowPass(!showPassword)} toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
        <br />
       
        <br />

        <input type="submit" value="Sign In" />
      </form>
      <br />
      {
          error ? <div className="text-danger">
          {error.message}
        </div> : ' '
      }
      {
          errorAuth ? <div className="text-danger">
            {errorAuth.message}
          </div> : ' '
      }
      <br /> <br />

     <div className="resetAndLink">
     <p>Are You  New Here ? <Link to='/signup'>Click to Register</Link> </p>
     <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Reset Password</button>
     </div>

      <div className="sign-buttons">
      

      <button className="sign-button" onClick={()=> signInWithGoogle
        ()}> <img width={20} src="https://i.ibb.co/8bx9v3d/google-logo-9824.png" alt="" /> Google</button> 
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/DKY32Pw/pngegg-2.png" alt="" /> Facebook</button>
          <button className="sign-button"> <img width={20}  src="https://i.ibb.co/F4w97S7/kindpng-2558173.png" alt="" /> GitHub</button>
      </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <input
              type="text"
              name="email"
              onBlur={handleEmail}
              placeholder="Email"
            />
            </div>
            <div className="modal-footer">
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

export default SignIn;
