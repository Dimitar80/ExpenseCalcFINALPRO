import React from "react";
import "../../assets/styles/SignOut.css";
import "../../assets/styles/shared.css";
import { Link, Redirect } from "react-router-dom";

const SignOut = props => {
  console.log(localStorage.getItem("_id"));
  function logOut() {
    localStorage.clear();
    props.sO();
  }
  return (
    <div id="signout">
      <div id="bck-screen">
        <div id="so-box">
          <div id="so-text">
            <h2>Sign Out {/*or Edit your account*/} </h2>
            <div id="so-userS">
              <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
              <div id="so-userInfo">
                <p>Edit your account </p>
                <p>
                  <span style={{ fontWeight: "600", fontSize: "18px" }}>
                    {localStorage.getItem("firstName") +
                      " " +
                      localStorage.getItem("lastName")}
                  </span>
                </p>
                <Link
                  to={"/edituser/" + localStorage.getItem("_id")}
                  // to={`/edituser/${localStorage.getItem("_id")}`}
                  style={{ textDecoration: "none" }} /*onClick={props.clBtn}*/
                >
                  <p>
                    <span
                      style={{
                        fontWeight: "0",
                        fontSize: "15px",
                        color: "blue"
                      }}
                    >
                      {localStorage.getItem("email")}
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <p>
              You are about to sign out. Are you sure you
              <br />
              want to continue?
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
