import React from "react";
import "../../assets/styles/SignOut.css";
import "../../assets/styles/shared.css";

const SignOut = props => {
  function logOut() {
    localStorage.clear();
    props.sO();
  }
  return (
    <div id="signout">
      <div id="bck-screen">
        <div id="so-box">
          <div id="so-text">
            <h2>Sign Out</h2>
            <div id="so-userS">
              <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
              <div id="so-userInfo">
                <p>
                  <span style={{ fontWeight: "900", fontSize: "18px" }}>
                    {localStorage.getItem("firstName") +
                      " " +
                      localStorage.getItem("lastName")}
                  </span>
                </p>
                <p>{localStorage.getItem("email")}</p>
              </div>
            </div>
            <p>
              You are about to sign out. Are you sure you
              <br />
              wish to continue?
            </p>
          </div>
          <div id="btns">
            <button id="socancel" onClick={props.clBtn}>
              CANCEL
            </button>
            <button id="sodelete" onClick={logOut}>
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
