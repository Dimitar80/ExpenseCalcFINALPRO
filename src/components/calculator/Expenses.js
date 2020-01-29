import React from "react";
import axios from "axios";
import "../../assets/styles/Expenses.css";
import "../../assets/styles/shared.css";
import TableAll from "../table/TableAll";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      data: [],
      yearValue: "Years",
      monthValue: "Months",
      // yearValueM: null,
      selected: false,
      loading: false,
      value: "",
      m: "",
      y: ""
    };
  }

  getAllProductsInExp = () => {
    this.setState({ loading: true });
    // const url = this.formatUrl();
    axios
      .get(`http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      })
      .then(res => {
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

  componentDidMount() {
    console.log("Expenses did mount");
    this.getAllProductsInExp();
  }

  showYearlyBtn = e => {
    ///// Kako resenie e OK No da ne e suvisen povikov ???/////
    // const index = selYears.findIndex(o => o.value === this.state.yearValue);
    // console.log(index);
    this.getAllProductsInExp();
    // document.getElementById("mySelectYears").selectedIndex = "0"; /// NAJDI ZA VO REACT ??? ///
    ///// I da go vrati option- value={"Years"}
    this.setState({
      toggle: true,
      // value:
      yearValue: "Years"
    });
  };

  // ZA FILTER PO GODINA VO GODINI //
  // onChange //
  selectYValue = e => {
    console.log("YEAR VALUE IS SELECTED");
    let that = this;
    this.setState(
      {
        yearValue: e.target.value
      },
      () => {
        console.log("SortProductsBy CB");
        that.filterByYear();
      }
    );
    console.log(e.target.value);
  };

  filterByYear = () => {
    let onlyYear = this.state.yearValue;
    console.log("onlyYear at Years is SELECTED -", onlyYear);
    let fromYear = new Date(`${onlyYear}-01-01 00:00:00.000`).getTime();
    console.log("Choose Year - dateFrom", fromYear); //Mon Jan 01 2001 00:00:00 default//
    let toYear = new Date(`${onlyYear}-12-31 23:59:59.000`).getTime();
    console.log("Choose Year - dateToOO", toYear); //Mon Dec 31 2001 23:59:59 default//
    if (onlyYear === "Years") {
      this.getAllProductsInExp();
      // this.setState({
      //   onlyYear: null
      // });
    } else if (
      this.state.toggle === true &&
      onlyYear != null &&
      onlyYear != "Years"
    ) {
      this.setState({ loading: true });
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=
          ${fromYear}&purcdate_to=${toYear}&sort=purchaseDate:desc`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
          }
        )
        .then(res => {
          console.log("In TIMEOUT");
          this.setState({ data: res.data, loading: false });
          console.log(this.res.data);
        })
        .catch(err => {
          this.setState({ loading: false });
          console.log(err, "ERROR on Yarly at Expenses component");
        });
      // this.setState({
      //   /*selected: false,*/
      //   onlyYear: null
      // });
    }
  };

  showMonthlyBtn = (/*e*/) => {
    ///// Kako resenie e OK No da ne e suvisen povikov ???/////
    this.getAllProductsInExp();
    // document.getElementById("mySelectYears").selectedIndex = "0";
    // document.getElementById("mySelectMonths").selectedIndex = "0"; //invoke.guardedCallBack ???///
    this.setState({
      toggle: false,
      yearValue: "Years",
      monthValue: "Months"
    });
  };

  // Za Mesec, Mesec i Godina//
  // onChange //
  selectMValue = (e, isMonth) => {
    console.log("MONTH VALUE IS SELECTED");
    let that = this;
    // let target = event.target.id;
    // let value = target.value;
    let inputId = event.target.id;
    // console.log(inputId);
    let value = event.target.value;
    if (isMonth) {
      this.setState(
        {
          monthValue: e.target.value
        },
        () => {
          console.log("SortProductsBy CB");
          // console.log(target);
          // console.log(value);
          // console.log(inputId);
          // console.log(value);
          console.log(event.target.id, event.target.value);
          that.filterByMonthYear();
        }
      );
    } else {
      this.setState(
        {
          // [inputId]: value
          // target,
          // value
          yearValue: e.target.value
          // [event.target.id]: event.target.value
          // m: e.target.value
        },
        () => {
          console.log("SortProductsBy CB");
          // console.log(target);
          // console.log(value);
          // console.log(inputId);
          // console.log(value);
          console.log(event.target.id, event.target.value);
          that.filterByMonthYear();
        }
      );
    }

    console.log(e.target.value);
  };

  filterByMonthYear = () => {
    // let selectedMonth = Number(this.state.monthValue);

    let selectedMonth = Number(this.state.monthValue);
    console.log("SelectedMonth at Months is SELECTED -", selectedMonth);
    console.log("SelectedMonth + 1 at Months-", selectedMonth + 1);

    let selectedYear = this.state.yearValue;
    // let selectedYear = this.state.value;
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
    if (this.state.toggle === false) {
      this.setState({ loading: true });
      console.log("Getting data");
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?purcdate_from=
          ${dateFromYM}&purcdate_to=${dateToYM}&sort=purchaseDate:desc`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
          }
        )
        .then(res => {
          this.setState({ data: res.data, loading: false });
          console.log(this.state.data);
        })
        .catch(err => {
          this.setState({ loading: false });
          console.log(err, "ERROR at Expenses component");
        });
    }
  };

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

    let selYears = [];
    for (let i = 1998; i <= year; i++) {
      selYears.push(i);
    }
    selYears.reverse();
    // console.log(selYears);
    selYears.unshift("Years");
    // console.log(selYears);
    // console.log(selYears[0]);

    // December + 1 = 13?! //
    // Za options na selectbox od Month
    let monthsList = [
      "Months",
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
        <NavbarSur toggle={true} />
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
              {this.state.toggle ? (
                <p /*id="select-box-container"*/ id="years">
                  <h2>Choose Year</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/
                    id="mySelectYears"
                    className="ex-select"
                    onChange={this.selectYValue}
                    value={this.state.yearValue}
                  >
                    {selYears.map((year, i) => (
                      // console.log("In Select", i, year),
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </p>
              ) : (
                <p /*id="select-box-container"*/ id="years">
                  <h2>Choose Month</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/
                    id="mySelectMonths"
                    className="ex-select"
                    onChange={e => this.selectMValue(e, true)}
                    value={this.state.monthValue}
                  >
                    {/* <option value={"Months"}>Months</option> */}
                    {monthsList.map((month, i) => (
                      // console.log(i, month),
                      <option key={month} value={i}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <h2>Choose Year</h2>
                  <select
                    /*name="expenses-filter" className="select-box"*/
                    id="mySelectYears"
                    className="ex-select"
                    onChange={e => this.selectMValue(e, false)}
                    value={this.state.yearValue}
                  >
                    {selYears.map((year, i) => (
                      // console.log(i, year),
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </p>
              )}
              {/* ON YEARLY SECTION-END */}
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
