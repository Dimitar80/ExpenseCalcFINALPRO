import React from "react";
import "../../assets/styles/Navbar.css";
import "../../assets/styles/shared.css";
import { Link, Redirect } from "react-router-dom";
import SignOut from "./SignOut";

// Navbar 'sreden'
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.props.toggle,
      signOut: false,
      uff: this.props.tes
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
    this.props.povik;
    this.setState({
      toggle: true
    });
  };

  refExp = () => {
    // this.props.povik();
    console.log("Povik: ", this.props.povik);
    // this.props.funOpt()
    // this.setState({ uff: "Years" });
    console.log("obnoven povik za expensess");
  };

  // SIgnOut Metods-START
  signOut = () => {
    this.setState({ signOut: !this.state.signOut });
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

    // console.log(this.props.val);
    // console.log(this.props.tes);
    // console.log(this.state.uff);

    return (
      <React.Fragment>
        {!localStorage.getItem("jwt") ? <Redirect to="/" /> : null}
        {/* <header id='header'> */}
        <div id="header">
          <nav id="mainnav">
            {/* <Link to="/">
              <button id="bthome">HOME</button>
            </Link> */}

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
              <button /*onClick={this.showExpenses}*/
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
          {/* SignOut - Display */}
          {this.state.signOut ? (
            <SignOut
              // ajdi={this.state.rowIdToDelete}}
              clBtn={this.closeBt}
              sO={this.signOut}
            />
          ) : null}
          <div id="user">
            <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />

            <h2 id="touch" onClick={this.signOut}>
              {localStorage.getItem("firstName") +
                " " +
                localStorage.getItem("lastName")}
            </h2>
          </div>
        </div>
        {/* </header> */}
      </React.Fragment>
    );
  }
}

export default Navbar;
