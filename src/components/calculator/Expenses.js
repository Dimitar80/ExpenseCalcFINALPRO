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

  showMonthlyBtn = (/*e*/) => {
    // alert("Monthly WORKS!")
    ///// Kako resenie e OK No da ne e suvisen povikov ???/////
    this.getProductsInExp();
    this.setState({
      showYearly: false,
      showMonthly: true,
      toggle: false
    });
  };

  showYearlyBtn = (/*e*/) => {
    // console.log(e.target)
    // alert("Yearly WORKS!")
    ///// Kako resenie e OK No da ne e suvisen povikov ???/////
    this.getProductsInExp();
    ///// I da go vrati option- value={"Years"}
    this.setState({
      showYearly: true,
      showMonthly: false,
      toggle: true
    });
  };

  // ZA FILTER PO GODINA I MESEC //
  selectYValue = e => {
    console.log("YEAR VALUE IS SELECTED");
    this.setState({
      yearValue: e.target.value,
      selected: true
    });
    console.log(e.target.value); //so setState:???
  };

  // Za Mesec //
  selectMValue = e => {
    console.log("MONTH VALUE IS SELECTED");
    this.setState({
      monthValue: e.target.value,
      selected: true
    });
    console.log(e.target.value);
  };

  getProductsInExp = () => {
    // console.log("getPoductsInExp");
    this.setState({ loading: true });
    // const url = this.formatUrl();
    axios
      .get(
        `http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc` /*,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        // console.log("getProductsInExp-Data: ", res.data);
        this.setState({
          data: res.data,
          loading: false /*yearValue: "Years"*/
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  //Boko//
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
  //Boko//

  componentDidMount() {
    console.log("Expenses did mount");
    this.getProductsInExp();
  }

  // Za Godina i Godina so Mesec//
  componentDidUpdate() {
    // Za Godina //
    let onlyYear = this.state.yearValue;
    console.log("onlyYear at Years is SELECTED -", onlyYear);
    let dateFrom = new Date(`${onlyYear}-01-01 00:00:00.000`).getTime();
    console.log("Choose Year - dateFrom", dateFrom); //Mon Jan 01 2001 00:00:00 default//
    // let dateTo = `${onlyYear}-12-31T23:59:59.000Z`
    let dateTo = new Date(`${onlyYear}-12-31 23:59:59.000`).getTime();
    console.log("Choose Year - dateToOO", dateTo); //Mon Dec 31 2001 23:59:59 default//

    // Za Mesec //
    let selectedMonth = Number(this.state.monthValue);
    console.log("SelectedMonth at Months is SELECTED -", selectedMonth);
    console.log("SelectedMonth + 1 at Months-", selectedMonth + 1);

    let selectedYear = this.state.yearValue;
    console.log("SelectedYear at Months", selectedYear);

    let dateFromYM = new Date(
      `${selectedYear}-${selectedMonth} 00:00:00.000`
      // `${selectedYear}-${selectedMonth}-01 00:00:00.000`
    ).getTime();
    console.log("dateFromYM", dateFromYM); // Sat Jan 01 2000 00:00:00?//
    let dateToYM = new Date(
      `${selectedYear}-${selectedMonth + 1} 00:00:00.000`
      // `${selectedYear}-${selectedMonth + 1}-01 00:00:00.000`
    ).getTime();
    console.log("dateToYM", dateToYM); //Mon Jan 01 2001 00:00:00//

    console.log("Component did update", onlyYear);
    if (this.state.selected === true && onlyYear === "Years") {
      this.getProductsInExp();
      this.setState({
        selected: false
        // onlyYear: null
      });
      // Za Godina START//
    } else if (
      this.state.showYearly === true &&
      this.state.showMonthly === false &&
      this.state.toggle === true &&
      this.state.selected === true &&
      onlyYear != null &&
      onlyYear != "Years"
    ) {
      // let dateFrom = new Date(`${onlyYear}-01-01 00:00:00.000`).getTime(); //2001 default//
      // console.log("Choose Year - dateFrom", dateFrom);
      // // let dateTo = `${onlyYear}-12-31T23:59:59.000Z`
      // let dateTo = new Date(`${onlyYear}-12-31 23:59:59.000`).getTime(); //2001 default//
      // console.log("Choose Year - dateToOO", dateTo);
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
          this.setState({ data: res.data, loading: false });
          // setTimeout(
          //   () => this.setState({ data: res.data, loading: false }),
          //   500
          // );
          console.log(this.res.data);
        })
        .catch(err => {
          this.setState({ loading: false });
          console.log(err, "ERROR on Yarly at Expenses component");
        });
      this.setState({
        selected: false
        // onlyYear: null
      });
      // Za Godina END//
    } else if (
      this.state.showYearly === false &&
      this.state.showMonthly === true &&
      this.state.toggle === false &&
      this.state.selected === true &&
      selectedMonth != null &&
      selectedYear != null
    ) {
      // let dateFromYM = new Date(
      //   `${selectedYear}-${selectedMonth} 00:00:00.000`
      //   // `${selectedYear}-${selectedMonth}-01 00:00:00.000`
      // ).getTime();
      // console.log("dateFromYM", dateFromYM); //2001 default//
      // let dateToYM = new Date(
      //   `${selectedYear}-${selectedMonth + 1} 00:00:00.000`
      //   // `${selectedYear}-${selectedMonth + 1}-01 00:00:00.000`
      // ).getTime();
      // console.log("dateToYM", dateToYM); //2001 default//

      // console.log(
      //   "Filter in component did mount",
      //   "Selected Month" + selectedMonth,
      //   "Selected Year at Monthly" + selectedYear,
      //   this.state.selected
      // );
      this.setState({ loading: true });
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=${dateFromYM}&purcdate_to=${dateToYM}&sort=purchaseDate:desc` /*,
                    { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
        )
        .then(res => {
          this.setState({ data: res.data, loading: false });
          console.log(this.state.data);
        })
        .catch(err => {
          this.setState({ loading: false });
          console.log(err, "ERROR at Expenses component");
        });
      this.setState({
        selected: false
        // selectedMonth: null,
        // selectedYear: null
      });
    } else {
      ("Probaj NOVO RESENIE!!!");
    }
  }

  render() {
    // Za options na selectbox od Year
    // console.log("Loading: ", this.state.loading);
    let today = new Date();
    // console.log(today);
    let year = today.getFullYear();
    // console.log(year);
    // let month = today.getMonth();
    // console.log(month);

    let selOptionsYear = [];
    for (let i = 1998; i <= year; i++) {
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

    const NavbarSur = this.props.component;
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <NavbarSur
          toggle={true}
          // povik={this.getProductsInExp}
          // tes={this.state.yearValue}
        />
        <div id="expenses">
          <div className="exmain-container">
            <div id="emaintitle">
              <h1>Expenses</h1>
            </div>
            <div id="experiod">
              {/* BUTTONS - MONTHLY/YEARLY START*/}
              <div className="ex-period-btns">
                <button
                  type="button" /*id='btnmonth'*/
                  className={
                    !this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"
                  }
                  onClick={this.showMonthlyBtn}
                >
                  MONTHLY
                </button>
                <button
                  type="button" /*id='btnyear'*/
                  className={
                    this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"
                  }
                  onClick={this.showYearlyBtn}
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
                    <option value={"Months"}>Months</option>
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
                    <option value={"Years"}>Years</option>
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
