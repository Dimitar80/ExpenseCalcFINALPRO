import React from "react";
import axios from "axios";
import "../../assets/styles/Expenses.css";
import "../../assets/styles/shared.css";
import TableAll from "../table/TableAll";

// const exbody = document.getElementsByTagName('body')
// document.body.style.backgroundColor = 'red';

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      // showAlert: false,
      showMonthly: true,
      showYearly: false,
      toggle: false,
      data: [],
      optionValue: null
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

  selectValue = e => {
    this.setState({
      optionValue: e.target.value
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

  componentDidUpdate() {
    // const { sort } = this.state;
    let selectedDate = this.state.optionValue;
    console.log(selectedDate);

    if (selectedDate) {
      console.log(selectedDate.length);
    }
    let dateFrom = new Date(`${selectedDate}-01-01T00:00:00.000Z`).getTime();
    console.log(dateFrom);
    // let toTargetDate = `${myDate}-12-31T23:59:59.000Z`
    let dateTo = new Date(`${selectedDate}-12-31T23:59:59.000Z`).getTime();
    console.log(dateTo);

    console.log("Component did update", selectedDate);
    if (selectedDate != null && selectedDate.length === 4) {
      console.log("Sort in component did mount", selectedDate);
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=${dateFrom}&purcdate_to=${dateTo}` /*,
                  { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
        )
        .then(res => {
          this.setState({ data: res.data /*, loading: false*/ });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const currentSort = selectedDate;
  //   const nextSort = nextState.selectedDate;
  //   console.log("Should Component update", currentSort, nextSort);
  //   if (currentSort === nextSort && currentSort !== null) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    // Za options na selectbox od Year
    let today = new Date();
    let year = today.getFullYear();
    //   console.log(year)
    let selOptionsYear = [];
    for (let i = 2001; i <= year; i++) {
      selOptionsYear.push(
        <option key={i} value={i}>
          {i}
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

    let totalSpent = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      totalSpent += this.state.data[i].productPrice;
    }

    // let selectedDate = this.state.optionValue;
    // console.log(selectedDate);

    // if (selectedDate) {
    //   console.log(selectedDate.length);
    // }

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
                    /*onChange={this.selectValue}*/
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
                    onChange={this.selectValue}
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
                    onChange={this.selectValue}
                  >
                    <option>Years</option>
                    {/* <option value={'total'}>Total</option> */}
                    {selOptionsYear}
                  </select>
                </p>
              ) : null}
              {/* Sredi M/Y Drop down i so queries*/}
            </div>
            <TableAll data={this.state.data} />
          </div>
          <div id="saldo">
            {/* <h2><span id='wh'>Total spent:</span> 1205 den.</h2> */}
            <h2>
              <span id="wh">Total spent:</span> {totalSpent} den.
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Expenses;
