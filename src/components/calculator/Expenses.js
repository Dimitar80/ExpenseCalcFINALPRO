import React from 'react'
import '../../assets/styles/Expenses.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

// const exbody = document.getElementsByTagName('body')
// document.body.style.backgroundColor = 'red';

class Expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            clicked:false,
            orange: true,
        }
    }
    
    // Funkcijata od kaj NAVBAR-ot od react-app-Redux ili nesto slicno bidejki ovaa e samo On/Off //
    ClickedBtn = (event) => {
        console.log(event.target.id)
        this.setState({ orange: !this.state.orange });
        // alert("Kliknato")
    }


    render () {

        let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

     return (
        <React.Fragment>
           <div id='expenses'>
           <header id="header">
               <nav id='mainnav'>
                   < Link to= '/' style={{textDecoration: 'none', color: '#576574'}}>
                       <button id='bthome'>HOME</button>
                   </Link>
            
                   < Link to= 'products' style={{textDecoration: 'none', color: '#1DD1A1'}}>
                       <button id='btproducts' onClick={this.ClickedBtn} className={btn_class} >
                           PRODUCTS
                        </button>
                   </Link>

                   < Link to= 'expenses' style={{textDecoration: 'none', color: '#576574'}}>
                       <button id='btexpenses' onClick={this.ClickedBtn} className={btn_class} >
                           EXPENSES
                       </button>
                   </Link>
               </nav>
               <div className="user">
                   <img src="../img/DPPHOTO.jpg" alt="profileimg" />
                   <h2>User name</h2>
               </div>
           </header>
            {/* BODY */}
        <div className='exmain-container'>
            <div id='emaintitle'>
                <h1>Expenses</h1>
            </div>
            <div id='experiod'>
                 <div className='periodbtns'> 
                <button type="button" id='btnmonth'>MONTHLY</button>
                <button type="button" id='btnyear'>YEARLY</button>
                 </div>
            <div id='months'>
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