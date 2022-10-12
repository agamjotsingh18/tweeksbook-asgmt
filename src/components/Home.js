import React from "react";
import SignIn from "./SignIn";

const Home = ({ signOut, user }) => {
  console.log(user);

  return (
    <div className="wrapper">
      <h1 className="main-heading">Welcome to TweepsBook👋 {user.phoneNumber}</h1>
      { 
      user?
        <button className="main-button" id="signOut" onClick={signOut}>
        Sign Out
      </button>
      :
      <button className="main-button" onClick={event =>  window.location.href='/signIn'}>
        Sign In
      </button>
}
    </div>
  );
};

export default Home;