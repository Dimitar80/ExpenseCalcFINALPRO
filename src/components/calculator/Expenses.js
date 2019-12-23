import React from 'react'
import '../../assets/styles/Expenses.css'
import '../../assets/styles/shared.css'
// import Table from '../table/Table'
import TableNew from '../table/TableNew'


// const exbody = document.getElementsByTagName('body')
// document.body.style.backgroundColor = 'red';

class Expenses extends React.Component {
    constructor() {
        super()
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            showMonthly: false,
            showYearly: true,
            toggle: true
        }
    }
    
    
           

    showMonthly = (/*e*/) => {
        // alert("Monthly WORKS!")
        this.setState({
            showYearly: false,
            showMonthly: true,
            toggle: false
        })
    }

    showYearly = (e) => {
        console.log(e.target)
        // alert("Yearly WORKS!")
        this.setState({
            showYearly: true,
            showMonthly: false,
            toggle: true
        })
    }





    render () {

      // Za options na selectbox od Year
      let today = new Date();
    //   console.log(today)
    //   let month = today.getMonth();
    //   console.log(month)
      let month = today.toLocaleString('default', { month: 'long' })
      console.log(month)
      
      let year = today.getFullYear();
      console.log(year)
      let selOptionsYear= []
      for (let i = 2000; i <= year; i++) {
      selOptionsYear.push(<option key={i} value={i}> {i} </option>)
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
      ]
      let selOptionsMonth= []
      for (let i = 0; i < monthsList.length; i++) {
          selOptionsMonth.push(<option key={i} value={i}> {monthsList[i]} </option>);
          console.log(selOptionsMonth);
      }
    //   console.log(selOptionsMonth);
      


      
      
     return (
        <React.Fragment>
            {/* <Navbar /> */}
            <this.props.component toggle={true}/>
           <div id='expenses'>
           
           
            {/* BODY */}
                <div className='exmain-container'>
                    <div id='emaintitle'>
                        <h1>Expenses</h1>
                    </div>
                    <div id='experiod'>
                        {/* in curly braces - dynamic data/content */}
                         {/* <p>{Math.random() * 10}</p> */}
                         <div className='periodbtns'> 
                            <button type="button" /*id='btnmonth'*/
                            className={!this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"}
                             onClick={this.showMonthly}>
                                MONTHLY
                            </button>
                            <button type="button" /*id='btnyear'*/ 
                            className={this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"}
                             onClick={this.showYearly}>
                                YEARLY
                            </button>
                         </div>
                      {/* <div id='months'> */}
                      {this.state.showMonthly ?
                      <p /*id="select-box-container"*/ id='years'>
                      {/* <label htmlFor="expenses-filter">Choose Year </label> */}
                      <h2>Choose Month</h2>
                      <select /*name="expenses-filter" className="select-box"*/ id="select" 
                      /*onChange={this.searchFilter}*/>
                          <option>Months</option>
                          {/* <option value={'total'}>Total</option> */}
                          {selOptionsMonth}
                      </select>
                  </p> : null}

                      {this.state.showYearly ? 
                            <p /*id="select-box-container"*/ id='years'>
                                {/* <label htmlFor="expenses-filter">Choose Year </label> */}
                                <h2>Choose Year</h2>
                                <select /*name="expenses-filter" className="select-box"*/ id="select" 
                                /*onChange={this.searchFilter}*/>
                                    <option>Years</option>
                                    {/* <option value={'total'}>Total</option> */}
                                    {selOptionsYear}
                                </select>
                            </p> : null}
                              {/* Sredi M/Y Drop down i so queries*/}
                     </div>
                     <TableNew />
                </div>
                        <div id='saldo'>
                           <h2><span id='wh'>
                           Total spent:</span> 1205 den.</h2>
                        </div>
            </div>
          </React.Fragment>
        )
    }
}



export default Expenses