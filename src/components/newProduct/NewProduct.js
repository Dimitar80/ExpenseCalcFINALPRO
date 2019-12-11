import React from 'react'
import '../../assets/styles/NewProduct.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
// import { Link } from './node_modules/react-router-dom'

class NewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            orange: true,
        }
    }

    // ClickedBtn = (event) => {
    //     console.log(event.target.id)
    //     this.setState({ orange: !this.state.orange });
    //     // alert("Kliknato")
    // }
  
    render () {

        let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

    return (
        <React.Fragment>
    <div id='newproducts'>
    <header id='header'>
        <nav id='mainnav'>
            < Link to= '/' style={{textDecoration: 'none', color: '#576574'}}>
                <button id='bthome'>HOME</button>
            </Link>
            
            < Link to= 'products' style={{textDecoration: 'none', color: '#1DD1A1'}}>
                <button id='btproducts' onClick={this.ClickedBtn} className={btn_class}>
                    PRODUCTS
                </button>
            </Link>

            < Link to= 'expenses' style={{textDecoration: 'none', color: '#576574'}}>
                <button id='btexpenses'onClick={this.ClickedBtn} className={btn_class}>
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
    <div id='npmain-container'> 
    <div id='npmaintitle'>
        <h1>New Product</h1>
    </div>
    <div className='form-container'>
        <div id='fpage'>
            <form>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Name</label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Description</label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Type</label>
                    <input type="email" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Purchase Date</label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Price</label>
                    <input type="text" className="nptextfield" />
               </p>
               <button className='cp-button'>
                   CREATE PRODUCT</button>
            </form>
            </div>
        <div id='right-page'>
            <p id='simbol'><i className="fas fa-plus-circle"></i></p>
                <p id='title'>You are creating a new product</p>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>
   )
  }
}

export default NewProduct