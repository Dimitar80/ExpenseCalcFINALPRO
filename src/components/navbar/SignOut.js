import React from "react";
import "../../assets/styles/SignOut.css";
import "../../assets/styles/shared.css";
import { Link, Redirect } from "react-router-dom";

const SignOut = props => {
  // console.log(localStorage.getItem("_id"));
  console.log(props);
  function logOut() {
    localStorage.clear();
    props.sO();

    // function showDelUser(){

    // }
  }
  return (
    <div id="signout">
      <div id="bck-screen">
        <div id="so-dd-box">
          <div id="so-text">
            <div id="so-userS">
              <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
              <div id="so-userInfo">
                {/* <div id="edelUser">
                  <Link
                    to={"/edituser/" + localStorage.getItem("_id")}
                    // to={`/edituser/${localStorage.getItem("_id")}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button id="edUser">Edit User</button>
                  </Link>
                  <button id="delUser" onClick={props.delOnOff}>
                    Delete User
                  </button>
                </div> */}
                <p>
                  <span
                    style={{
                      fontWeight: "550",
                      fontSize: "18px",
                      marginTop: 5,
                      padding: 0
                    }}
                  >
                    {localStorage.getItem("firstName") +
                      " " +
                      localStorage.getItem("lastName")}
                  </span>
                </p>
                <p>{localStorage.getItem("email")}</p>
              </div>
              <Link
                to={"/edituser/" + localStorage.getItem("_id")}
                // to={`/edituser/${localStorage.getItem("_id")}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  margin: "16px auto ",
                  width: "240px"
                }}
              >
                <button id="edUser">Manage your Account settings</button>
              </Link>
            </div>
          </div>
          <div id="signout-btns">
            <button id="so-cancel" onClick={props.clBtn}>
              CANCEL
            </button>
            <button id="so-signout" onClick={logOut}>
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
