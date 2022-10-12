import React, { useEffect, useState } from "react";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const App = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyATnNiPZp3He4Rg61qkm4HSalwPabYzfdc",
    authDomain: "tweeksbook-asgmt.firebaseapp.com",
    projectId: "tweeksbook-asgmt",
    storageBucket: "tweeksbook-asgmt.appspot.com",
    messagingSenderId: "211347507777",
    appId: "1:211347507777:web:ba5c04c0b11e2ced99d4c0",
    measurementId: "G-LJWWSLGS1Q"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); 
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const otpSubmit = (e) => {
    e.preventDefault();
const otp_value=e.target.otp_value1.value+e.target.otp_value2.value+e.target.otp_value3.value+e.target.otp_value4.value+e.target.otp_value5.value+e.target.otp_value6.value;
    let opt_number = otp_value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/signin", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
      <div id="recaptcha-container"></div>
      <Switch>
        <Route path="/" exact>
          <Home signOut={signOut} user={user} />
        </Route>
        <Route path="/signin" exact>
          <SignIn
            loginSubmit={loginSubmit}
            otpSubmit={otpSubmit}
            viewOtpForm={viewOtpForm}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;