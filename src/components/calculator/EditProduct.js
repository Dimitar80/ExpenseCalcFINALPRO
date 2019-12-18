import React from 'react'
import '../../assets/styles/EditProduct.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'


class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            show: true
           
        }
    }

    closeBt = () => {
        this.setState({ show: false })
    }
  
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
        <h1>Edit Product</h1>
    </div>
    <div className='form-container'>
        <div id='fpage'>
            <form>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Name
                    </label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Description
                    </label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Type
                    </label>
                    <input type="email" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Purchase Date
                    </label>
                    <input type="text" className="nptextfield" />
               </p>
               <p className='input-container'>
                    <label className="nplabel" >
                        Product Price
                    </label>
                    <input type="text" className="nptextfield" />
               </p>
               <div id='btnsNp'>
               <button type='button' className='cp-button'>
                   SAVE
               </button>
               <Link to='products'>
               <button className='cl-button' /*onClick={this.closeBt}*/>
                   CLOSE
               </button>
               </Link>
               </div>
            </form>
            </div>
        <div id='right-page'>
            <p id='simbol'><i className="fas fa-plus-circle"></i></p>
                <p id='title'>You are editing an existing product</p>
        </div>
      </div>
    </div>
  </div>
</React.Fragment>
   )
  }
}

export default EditProduct