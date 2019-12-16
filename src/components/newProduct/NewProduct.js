import React from 'react'
import '../../assets/styles/NewProduct.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'


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

        // let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <this.props.component toggle={false}/>
    <div id='newproducts'>
        
    {/* Portal */}
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
               <div id='btnsNp'>
               <button className='cp-button'>
                   CREATE PRODUCT
               </button>
               <Link to='products'>
               <button className='cl-button'>
                   CLOSE
               </button>
               </Link>
               </div>
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