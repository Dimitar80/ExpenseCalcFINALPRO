import React from "react";
import axios from "axios";
import "../../assets/styles/Expenses.css";
import "../../assets/styles/shared.css";
import TableAll from "../table/TableAll";
import TableBody from "../table/TableBody";

// const exbody = document.getElementsByTagName('body')
// document.body.style.backgroundColor = 'red';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      // showProducts: true,
      // showAlert: false,
      // didUpdate: false
      showMonthly: true,
      showYearly: false,
      toggle: false,
      data: []
    };
  }

  showMonthly = (/*e*/) => {
    // alert("Monthly WORKS!")
    this.setState({
      showYearly: false,
      showMonthly: true,
      toggle: false
    });
  };

  showYearly = e => {
    // console.log(e.target)
    // alert("Yearly WORKS!")
    this.setState({
      showYearly: true,
      showMonthly: false,
      toggle: true
    });
  };

  componentDidMount() {
    axios
      .get(
        "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc" /*, 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        // const pUp = res.data
        // console.log(pUp)
        this.setState({ data: res.data /*, loading: false*/ });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // Za options na selectbox od Year
    let today = new Date();
    let year = today.getFullYear();
    //   console.log(year)
    let selOptionsYear = [];
    for (let i = 2000; i <= year; i++) {
      selOptionsYear.push(
        <option key={i} value={i}>
          {" "}
          {i}{" "}
        </option>
      );
    }
    selOptionsYear.reverse();

    // Za options na selectbox od Month
    let monthsList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    //   let totalSpent = 0
    //     for (let i = 0; i < this.props.products.length; i++) {
    //         totalSpent += this.props.products[i].productPrice
    //     }

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <this.props.component toggle={true} />
        <div id="expenses">
          <div className="exmain-container">
            <div id="emaintitle">
              <h1>Expenses</h1>
            </div>
            <div id="experiod">
              {/* in curly braces - dynamic data/content */}
              {/* <p>{Math.random() * 10}</p> */}
              <div className="periodbtns">
                <button
                  type="button" /*id='btnmonth'*/
                  className={
                    !this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"
                  }
                  onClick={this.showMonthly}
                >
                  MONTHLY
                </button>
                <button
                  type="button" /*id='btnyear'*/
                  className={
                    this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"
                  }
                  onClick={this.showYearly}
                >
                  YEARLY
                </button>
              </div>
              {/* <div id='months'> */}
              {this.state.showMonthly ? (
                <p /*id="select-box-container"*/ id="years">
                  {/* <label htmlFor="expenses-filter">Choose Year </label>  */}
                  <h2>Choose Month</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/ id="select"
                    /*onChange={this.searchFilter}*/
                  >
                    <option>Months</option>
                    {/* <option value={'total'}>Total</option> */}
                    {monthsList.map((month, i) => (
                      //   console.log(i, month),
                      <option key={month} value={i}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <h2>Choose Year</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/ id="select"
                    /*onChange={this.searchFilter}*/
                  >
                    <option>Years</option>
                    {/* <option value={'total'}>Total</option> */}
                    {selOptionsYear}
                  </select>
                </p>
              ) : null}

              {this.state.showYearly ? (
                <p /*id="select-box-container"*/ id="years">
                  {/* <label htmlFor="expenses-filter">Choose Year </label> */}
                  <h2>Choose Year</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/ id="select"
                    /*onChange={this.searchFilter}*/
                  >
                    <option>Years</option>
                    {/* <option value={'total'}>Total</option> */}
                    {selOptionsYear}
                  </select>
                </p>
              ) : null}
              {/* Sredi M/Y Drop down i so queries*/}
            </div>
            {/* <TableData /> */}
            {/* <TableBody data={this.state.data} /> */}
            <TableAll data={this.state.data} />
          </div>
          <div id="saldo">
            {/* <h2><span id='wh'>Total spent:</span> 1205 den.</h2> */}
            <h2>
              <span id="wh">Total spent:</span> {/*{totalSpent}*/} den.
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expenses;
