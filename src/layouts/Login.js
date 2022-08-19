import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(res) {
    console.log("Encoded JWT ID token: " + res.credential);
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1032358549168-t599uukemq496200t9su1s49blsn7u3m.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  });
  // If no user: Sign In Button
  // If have a user: Sign Out Button
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
};
export default Login;
