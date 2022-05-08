import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ScaleLoader } from "react-spinners";
import auth from "../../firebase.init";
import './Profile.css'

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div className="loader">
        <ScaleLoader color="red" size={150} />
      </div>
    );
  }
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="d-inline">
          <h4 className="d-inline">Your Avater : </h4>
          <img
            width="80px"
            className="rounded-circle profile"
            src={user?.photoURL}
            alt=""
          />
        </div>
        
        <div>
          <h4 className="d-inline">Your Name : </h4>
          <h1 className="update-name d-inline">{user?.displayName}</h1>
        </div>
        <br />
        <div>
          <h4 className="d-inline">Your Email : </h4>
          <h1 className="update-name d-inline">{user?.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
