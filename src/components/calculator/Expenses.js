import React from 'react'
import '../../assets/styles/Expenses.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

// const exbody = document.getElementsByTagName('body')
// document.body.style.backgroundColor = 'red';

class Expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            showMonhtly: false,
            showYearly: true,
            toggle: true,
        }
    }
    
    // Funkcijata od kaj NAVBAR-ot od react-app-Redux ili nesto slicno bidejki ovaa e samo On/Off //
    ClickedBtn = (event) => {
        console.log(event.target.id)
        this.setState({ orange: !this.state.orange });
        // alert("Kliknato")
    }

     
    monthOpt = () => {
          return ( 
              <div>
               <h2>Choose Month</h2>
                 <select id='select'>
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
                 </select>
              </div>
          )
        }
                    

    showMonhtly = (e) => {
        alert("Monthly WORKS!")
        this.setState({
            showYearly: false,
            showMonhtly: true,
            toggle: false
        })
    }

    showYearly = (e) => {
        alert("Yearly WORKS!")
        this.setState({
            showYearly: true,
            showMonhtly: false,
            toggle: true
        })
    }





    render () {

        // let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

     return (
        <React.Fragment>
           <div id='expenses'>
           <Navbar />
           
            {/* BODY */}
                <div className='exmain-container'>
                    <div id='emaintitle'>
                        <h1>Expenses</h1>
                    </div>
                    <div id='experiod'>
                         <div className='periodbtns'> 
                            <button type="button" /*id='btnmonth'*/
                            className={!this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"}
                             onClick={this.showMonhtly}>
                                MONTHLY
                            </button>
                            <button type="button" /*id='btnyear'*/ 
                            className={this.state.toggle ? "mY-btn active-mY-btn" : "mY-btn"}
                             onClick={this.showYearly}>
                                YEARLY
                            </button>
                         </div>
                      <div id='months'>
                          Sredi M/Y Drop down i so queries
                          {this.state.showMonthly ?{monthOpt} : null}
                          {/* <h2>Choose Month</h2>
                          <select id='select'>
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
                    </div>
                    <table id='emaintable'>
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
                    </table>
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