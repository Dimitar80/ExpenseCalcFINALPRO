import React from 'react'
import '../../assets/styles/NewProduct.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


class NewProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: null,
            productType: null,
            productDescription: null,
            purchaseDate: null,
            productPrice: null
        }
    }

    // ClickedBtn = (event) => {
    //     console.log(event.target.id)
    //     this.setState({ orange: !this.state.orange });
    //     // alert("Kliknato")
    // }


    saveInputValue = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    createProduct = (event) => {
        console.log('clicked')
        if( this.state.productName === null ||
            this.state.productType === null ||
            this.state.productDescription === null ||
            this.state.purchaseDate === null ||
            this.state.productPrice === null){
                event.preventDefault()
                alert('Please fill out all the fields')
        } else /*if ( 
            this.state.productName != null &&
            this.state.productType != null &&
            this.state.productDescription != null &&
            this.state.purchaseDate != null &&
            this.state.productPrice != null)*/ {
            
            axios.post('http://127.0.0.1:8082/api/v1/products/', {
                productName: this.state.productName,
                productType: this.state.productType,
                productDescription: this.state.productDescription,
                purchaseDate: this.state.purchaseDate,
                productPrice: this.state.productPrice,
                _created: new Date()
            } /*, { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
            });
            // store.dispatch(didUpdate(true))
        }
    }    

  
    render () {
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
                                  Product Name
                              </label>
                              <input type="text" className="nptextfield" id='productName' 
                               onChange={this.saveInputValue} />
                         </p>
                         <p className='input-container'>
                              <label className="nplabel" >
                                  Product Type
                              </label>
                              <input type="text" className="nptextfield" id='productType'
                               onChange={this.saveInputValue}/>
                         </p>
                         <p className='input-container'>
                              <label className="nplabel" >
                                  Product Description
                              </label>
                              <input type="text" className="nptextfield" id='productDescription'
                               onChange={this.saveInputValue}/>
                         </p>
                         <p className='input-container'>
                              <label className="nplabel" >
                                  Purchase Date
                              </label>
                              <input type="date" className="nptextfield" id='purchaseDate'
                               onChange={this.saveInputValue}/>
                         </p>
                         <p className='input-container'>
                              <label className="nplabel" >
                                  Product Price
                              </label>
                              <input type="text" className="nptextfield" id='productPrice'
                               onChange={this.saveInputValue}/>
                         </p>
                         <div id='btnsNp'>
                         <button type='button' className='cp-button' onClick={this.createProduct} >
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
                          <p id='simbol'><i className="fas fa-plus-circle" /></p>
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