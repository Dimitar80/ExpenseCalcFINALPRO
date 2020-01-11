import React from "react";
import "../../assets/styles/Navbar.css";
import "../../assets/styles/shared.css";
import { Link } from "react-router-dom";
import SignOut from "./SignOut";

// Navbar 'sreden'
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.props.toggle,
      signOut: false
      // show: false
    };
  }

  // Kako raboti toggle-iranjeto koga ovie dve funkcii ne postojat/se iskomentirani???
  showProducts = () => {
    // alert("Products WORKS!")
    this.setState({
      toggle: false
    });
  };

  showExpenses = () => {
    // alert("Expenses WORKS!")
    this.setState({
      toggle: true
    });
  };

  // SIgnOut Metods-START
  signOut = () => {
    this.setState({ signOut: true });
  };

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
        {/* <header id='header'> */}
        <div id="header">
          <nav id="mainnav">
            <Link to="/">
              <button id="bthome">HOME</button>
            </Link>

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

            <Link
              to="/expenses" /*exact activeClassName="navbar-button active"*/
            >
              <button
                /*id='btexpenses'*/ onClick={this.showExpenses}
                className={
                  this.state.toggle ? "navbar-button active" : "navbar-button"
                }
                /*activeClassName="navbar-button active"*/
              >
                EXPENSES
              </button>
            </Link>
          </nav>
          {/* SignOut - Display */}
          {this.state.signOut && (
            <SignOut
              // ajdi={this.state.rowIdToDelete}}
              clBtn={this.closeBt}
              // delRow={this.deleteRow}
            />
          )}
          <div id="user">
            <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
            {/* PRAKTICNO DA ISKOCI POP UP KO DELETE SO PRASANJE ZA KONFIRMACIJA A OD YES DA ME VRATI NA
            LINKOT - PATEKATA '/' OD Prologin ! */}
            <h2 id="touch" onClick={this.signOut}>
              User name
            </h2>
          </div>
        </div>
        {/* </header> */}
      </React.Fragment>
    );
  }
}

export default Navbar;
