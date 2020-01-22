import React from "react";
import "../../assets/styles/ProLogin.css";
import "../../assets/styles/shared.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class ProLogin extends React.Component {
  constructor(/*props*/) {
    super(/*props*/);
    this.state = {
      email: null,
      //   password: null,
      password: "",
      hidden: true,
      redirect: false
    };
  }

  saveInputValue = event => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(event.target.id);
    console.log(event.target.value);
  };

  logIn = event => {
    event.preventDefault();
    if (
      this.state.email === null ||
      this.state.password === null
      /*&& ako ne se pravilno napisani 
        da dade alert-your e-mail address or password is incorrect
        i ako nema takov user so tie podatoci vo baza da alert-theres no such user with this data*/
    ) {
      event.preventDefault();
      alert("All fields must be filled out to SignIn!");
    } else {
      axios
        .post("http://127.0.0.1:8081/api/v1/auth/login", {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          localStorage.setItem("jwt", res.data.jwt);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("firstName", res.data.first_name);
          localStorage.setItem("lastName", res.data.last_name);
          this.setState({ redirect: true });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  // Za PASSWORD - HIDDEN/VISIBLE //
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };

  toggleShow = e => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };

  //   componentDidMount() {
  //     if (this.state.password) {
  //       this.setState({ password: this.state.password });
  //     }
  //   }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/products" />;
    }
    return (
      <React.Fragment>
        <div id="prologin">
          <div className="box-container">
            <form>
              <p className="input-container">
                <label className="text-label">E-mail</label>
                <input
                  type="text"
                  className="text-input"
                  //   placeholder="Korekcii - Finishing"
                  id="email"
                  onChange={this.saveInputValue}
                />
              </p>
              <p className="input-container">
                <label className="text-label">Password</label>
                <input
                  //   type="password"
                  type={this.state.hidden ? "password" : "text"}
                  className="text-input"
                  //   id="password"
                  //   onChange={this.saveInputValue}
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  placeholder=""
                />
                <i
                  className="fa fa-eye password-icon"
                  onClick={this.toggleShow}
                />
                {/* <button onClick={this.toggleShow}>Show/Hide</button> */}
              </p>
              {/* <Link
                to="/products"
                style={{ textDecoration: "none", color: "#fff" }}
              > */}
              <button className="primary-button" onClick={this.logIn}>
                SIGN IN
              </button>
              {/* </Link> */}
            </form>
          </div>
          <div className="additional-info">
            <p>
              {" "}
              Or if you don't have an account,
              <Link
                to="/register"
                activestyle={{ color: "red" }}
                style={{
                  textDecoration: "none",
                  color: "#8d8d8d",
                  fontWeight: 700
                }}
              >
                &nbsp; Register.
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProLogin;
