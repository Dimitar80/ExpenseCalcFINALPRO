import React from 'react'
import '../../assets/styles/Expenses.css'
import '../../assets/styles/shared.css'
import Table from '../table/Table'


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
    
    
     
    monthOpt = () => {
          return ( 
              <div>
               <h2>Choose Month</h2>
                 {/* <select id='select'>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                 </select> */}
              </div>
          )
        }
                    

    showMonthly = (/*e*/) => {
        // alert("Monthly WORKS!")
        this.setState({
            showYearly: false,
            showMonthly: true,
            toggle: false
        })
    }

    showYearly = (/*e*/) => {
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
                     <Table />
                    {/* <table id='emaintable'>
                        <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table> */}
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