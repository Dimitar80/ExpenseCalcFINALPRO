import React from "react";
import "../../assets/styles/Register.css";
import "../../assets/styles/shared.css";
// import { BrowserRouter as Link } from 'react-router-dom'
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="register">
          <div className="box-container" id="regbox">
            <form>
              <p className="input-container">
                <label className="text-field-input">First Name</label>
                <input className="text-field" type="text" />
              </p>
              <p className="input-container">
                <label className="text-field-input">Last Name</label>
                <input className="text-field" type="text" />
              </p>
              <p className="input-container">
                <label className="text-field-input">E-mail</label>
                <input className="text-field" type="email" />
              </p>
              <p className="input-container">
                <label className="text-field-input">Date of Birth</label>
                <input className="text-field" type="text" />
              </p>
              <p className="input-container">
                <label className="text-field-input">Telephone</label>
                <input className="text-field" type="text" />
              </p>
              <p className="input-container">
                <label className="text-field-input">Country</label>
                <input className="text-field" type="text" />
              </p>
              <p className="input-container">
                <label className="text-field-input">Password</label>
                <input className="text-field" type="password" />
              </p>
              <button className="primary-button" type="submit">
                REGISTER
              </button>
            </form>
          </div>
          <div className="additional-info">
            <p>
              Or if you already have an account,
              <Link
                to="/"
                activestyle={{ color: "red" }}
                style={{
                  textDecoration: "none",
                  color: "#8d8d8d",
                  fontWeight: 700
                }}
              >
                &nbsp; Sign in.
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
