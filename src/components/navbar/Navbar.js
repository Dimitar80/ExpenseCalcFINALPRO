import React from "react";
import "../../assets/styles/Navbar.css";
import "../../assets/styles/shared.css";
import { Link, Redirect } from "react-router-dom";
import SignOut from "./SignOut";
import DeleteUser from "./DeleteUser";

// Navbar 'sreden'
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.props.toggle,
      signOut: false,
      uff: this.props.tes,
      // show: false
      redirect: false,
      delShow: false
    };
  }

  showProducts = () => {
    this.setState({
      toggle: false
    });
  };

  showExpenses = () => {
    this.props.povik;
    this.setState({
      toggle: true
    });
  };

  // SIgnOut Metods-START
  signOut = () => {
    this.setState({ signOut: !this.state.signOut });
  };

  // delOut = () => {
  //   this.setState({ delShow: !this.state.delShow, signOut: false });
  // };

  closeBt = () => {
    console.log("Function called");
    this.setState({ signOut: false });
  };
  // SignOut Methods-END

  render() {
    // console.log(this.state.signOut);
    // console.log(this.state.toggle);
    // console.log(this.state.show);

    return (
      <React.Fragment>
        {!localStorage.getItem("jwt") ? <Redirect to="/" /> : null}
        {/* <header id='header'> */}
        <div id="header">
          <nav id="mainnav">
            <Link
              to="/products" /*exact activeClassName="navbar-button active"*/
            >
              <button
                /*id='btproducts'*/ onClick={this.showProducts}
                className={
                  !this.state.toggle ? "navbar-button active" : "navbar-button"
                }
              >
                PRODUCTS
              </button>
            </Link>
            <Link to="/expenses">
              <button
                onClick={this.showExpenses}
                // /*id='btexpenses'*/ /*onClick={this.props.povik}*/ onClick={() =>
                //   this.refExp()
                // }
                className={
                  this.state.toggle ? "navbar-button active" : "navbar-button"
                }
                /*activeClassName="navbar-button active"*/
              >
                EXPENSES
              </button>
            </Link>
          </nav>

          <div id="user" className="dropdown">
            <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
            <h3
              id="touch"
              className={
                !this.state.signOut ? "user-cl active-user-cl" : "user-cl"
              }
              // onMouseEnter ={this.signOut}
              onClick={this.signOut}
            >
              {localStorage.getItem("firstName") +
                " " +
                localStorage.getItem("lastName")}
            </h3>
            <div className="dropdown-content">
              {this.state.signOut ? (
                <SignOut
                  // ajdi={this.state.rowIdToDelete}}
                  clBtn={this.closeBt}
                  sO={this.signOut}
                />
              ) : null}
            </div>
          </div>
        </div>
        {/* </header> */}
      </React.Fragment>
    );
  }
}

export default Navbar;
