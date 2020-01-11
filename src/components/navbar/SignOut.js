import React from "react";
import "../../assets/styles/SignOut.css";
import "../../assets/styles/shared.css";

const SignOut = props => {
  return (
    <div id="signout">
      <div id="bck-screen">
        <div id="so-box">
          <div id="so-text">
            <h2>Sign Out</h2>
            <div id="so-userS">
              <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
              <div id="so-userInfo">
                <p>Dimitar Pavlov</p>
                <p>designcrafts.mk@gmail.com</p>
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
