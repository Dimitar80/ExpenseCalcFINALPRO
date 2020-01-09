import React from "react";
import "../../assets/styles/SignOut.css";
import "../../assets/styles/shared.css";

const SignOut = props => {
  return (
    <div id="signout">
      <div id="bck-screen">
        <div id="sobox">
          <div id="soxtext">
            <h2>Sign Out</h2>
            <div id="userInfo">
              <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />

              <h2>User name</h2>
              <p>User email</p>
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
            <button id="sodelete" /*onClick={() => this.props.delRow(id)}*/>
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
