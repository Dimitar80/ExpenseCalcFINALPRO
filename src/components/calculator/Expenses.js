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
      showMonthly: true,
      showYearly: false,
      toggle: false,
      data: [],
      yearValue: null,
      monthValue: null,
      selected: false,
      loading: false
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

  showYearly = (/*e*/) => {
    // console.log(e.target)
    // alert("Yearly WORKS!")
    this.setState({
      showYearly: true,
      showMonthly: false,
      toggle: true
    });
  };

  // ZA FILTER PO GODINA I MESEC //
  selectYValue = e => {
    this.setState({
      yearValue: e.target.value,
      selected: true
    });
    console.log(e.target.value); //so setState:???
  };

  handleChange = (/*e*/) => {
    this.setState({ yearValue: "Years" });
  };

  // Za Mesec //
  selectMValue = e => {
    this.setState({
      monthValue: e.target.value,
      selected: true
    });
    console.log(e.target.value);
  };

  getProductsInExp = () => {
    console.log("Get products");
    this.setState({ loading: true });
    // const url = this.formatUrl();
    axios
      .get(
        `http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc` /*,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        // console.log(data);
        console.log("getProductsInExp-Data: ", res.data);
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  formatUrl = () => {
    const base =
      "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc";
    // Formatiraj gi vo timestamp
    if (this.state.yearValue && this.state.monthValue) {
      url = base + `&purcdate_from=${dateFrom}&purcdate_to=${dateTo}`;
      return url;
    }
    return base;
  };

  componentDidMount() {
    console.log("Expenses did mount");
    this.getProductsInExp();
  }

  // onYears = () => {
  //   console.log("Function called");
  //   // this.setState({ show: false });
  //   this.getProductsInExp();
  // };

  // componentDidUpdate() {
  //   let selectedDate = this.state.optionValue;
  //   console.log(selectedDate);

  //   if (selectedDate != null) {
  //     console.log(selectedDate.length);
  //   }
  //   let dateFrom = new Date(`${selectedDate}-01-01 00:00:00.000`).getTime();
  //   console.log("dateFrom", dateFrom);
  //   // let dateTo = `${selectedDate}-12-31T23:59:59.000Z`
  //   let dateTo = new Date(`${selectedDate}-12-31 23:59:59.000`).getTime();
  //   console.log("dateToOO", dateTo);

  //   console.log("Component did update", selectedDate);
  //   if (selectedDate === null /*&& selectedDate.length === 4*/) {
  //     this.getProductsInExp();
  //   } else {
  //     // console.log("else TESTING componentDidUpdate");
  //     // console.log("Sort in component did mount", selectedDate);
  //     axios
  //       .get(
  //         `http://127.0.0.1:8082/api/v1/products/?purcdate_from=${dateFrom}&purcdate_to=${dateTo}&sort=purchaseDate:desc` /*,
  //                 { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
  //       )
  //       .then(res => {
  //         this.setState({ data: res.data /*, loading: false*/ });
  //         console.log(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
  // }

  // Za Godina i Mesec//
  componentDidUpdate() {
    // Za Godina //
    let onlyYear = this.state.yearValue;
    console.log(onlyYear);
    // Za Mesec //
    let selectedMonth = Number(this.state.monthValue);
    console.log("Selected month", selectedMonth);
    let selectedYear = this.state.yearValue;
    console.log(selectedYear);

    console.log("Component did update", onlyYear);
    if (onlyYear === "Years" && this.state.selected === true) {
      this.getProductsInExp();
      this.setState({
        selected: false,
        onlyYear: null
      });
    } else if (
      this.showYearly &&
      onlyYear != null &&
      this.state.selected === true
    ) {
      let dateFrom = new Date(`${onlyYear}-01-01 00:00:00.000`).getTime(); //2001 default//
      console.log("dateFrom", dateFrom);
      // let dateTo = `${selectedDate}-12-31T23:59:59.000Z`
      let dateTo = new Date(`${onlyYear}-12-31 23:59:59.000`).getTime(); //2001 default//
      console.log("dateToOO", dateTo);
      console.log(
        "Filter in component did mount",
        "Selected Year at Yearly" + onlyYear,
        this.state.selected
      );
      this.setState({ loading: true });
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=${dateFrom}&purcdate_to=${dateTo}&sort=purchaseDate:desc` /*,
                  { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
        )
        .then(res => {
          console.log("In TIMEOUT");
          setTimeout(
            () => this.setState({ data: res.data, loading: false }),
            1000
          );

          console.log(this.state.data);
          // if (this.state.data.length === 0) {
          //   alert("There is no data for this Year");
          // }
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({
        selected: false,
        onlyYear: null
      });
    } else if (
      this.showMonthly &&
      selectedMonth != null &&
      selectedYear != null &&
      this.state.selected === true
    ) {
      let dateFromYM = new Date(
        `${selectedYear}-${selectedMonth} 00:00:00.000`
        // `2019-${selectedMonth} 00:00:00.000`
      ); /*.getTime();*/
      console.log("dateFromYM", dateFromYM); //2001 default//
      let dateToYM = new Date(
        `${selectedYear}-${selectedMonth + 1} 00:00:00.000`
        // `2019-${selectedMonth + 1} 00:00:00.000`
      ); /*.getTime()*/
      console.log("dateToYM", dateToYM); //2001 default//
      console.log(
        "Filter in component did mount",
        "Selected Month" + selectedMonth,
        "Selected Year at Monthly" + selectedYear,
        this.state.selected
      );
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=${dateFromYM}&purcdate_to=${dateToYM}&sort=purchaseDate:desc` /*,
                    { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
        )
        .then(res => {
          this.setState({ data: res.data /*, loading: false*/ });
          console.log(this.state.data);
          // if (res.data === null) {
          //   alert("There is no data for this Year, please select another one");
          // } else if (res.data != null) {
          //   this.setState({ data: res.data /*, loading: false*/ });
          // }
        })
        .catch(err => {
          console.log(err);
        });
      // this.setState({
      //   selected: false,
      //   selectedMonth: null,
      //   selectedYear: null
      // });
    } else {
      ("Probaj NOVO RESENIE!!!");
    }
  }

  render() {
    // Za options na selectbox od Year
    console.log("Loading: ", this.state.loading);
    let today = new Date();
    console.log(today);
    let year = today.getFullYear();
    // console.log(year);
    // let month = today.getMonth();
    // console.log(month);

    let selOptionsYear = [];
    for (let i = 1999; i <= year; i++) {
      selOptionsYear.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
      // console.log(i);
    }
    selOptionsYear.reverse();

    // const currentYear = new Date().getFullYear();
    // console.log(currentYear);
    // const fromMonth = new Date(currentYear, 0);
    // console.log(fromMonth);
    // const toMonth = new Date(currentYear /*+ 10*/, 4);
    // console.log(toMonth);

    // Za options na selectbox od Month
    let monthsList = [
      "...",
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

    const Navbar = this.props.component;
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <Navbar
          toggle={true}
          povik={this.getProductsInExp}
          tes={this.state.yearValue}
          // funOpt={this.handleChange}
          // val={this.onlyYear}
        />
        <div id="expenses">
          <div className="exmain-container">
            <div id="emaintitle">
              <h1>Expenses</h1>
            </div>
            <div id="experiod">
              {/* in curly braces - dynamic data/content */}
              {/* <p>{Math.random() * 10}</p> */}

              {/* BUTTONS - MONTHLY/YEARLY START*/}
              <div className="ex-period-btns">
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
              {/* BUTTONS - MONTHLY/YEARLY END*/}

              {this.state.showMonthly ? (
                <p /*id="select-box-container"*/ id="years">
                  <h2>Choose Month</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/ id="select"
                    onChange={this.selectMValue}
                  >
                    <option>Months</option>
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
                    onChange={this.selectYValue}
                  >
                    <option value={"Years"} /*onClick={this.onYears}*/>
                      Years
                    </option>
                    {selOptionsYear}
                  </select>
                </p>
              ) : null}

              {this.state.showYearly ? (
                <p /*id="select-box-container"*/ id="years">
                  <h2>Choose Year</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/ id="select"
                    onChange={this.selectYValue}
                  >
                    <option>Years</option>
                    {selOptionsYear}
                  </select>
                </p>
              ) : null}
            </div>
            <TableAll dataLoading={this.state.loading} data={this.state.data} />
          </div>
          <div id="saldo">
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
