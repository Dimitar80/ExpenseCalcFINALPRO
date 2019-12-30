import React from 'react'
import '../../assets/styles/EditProduct.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edata: [],
            // productName: null /*this.props.productName*/,
            // productType: null,
            // productDescription: null,
            // purchaseDate: null,
            // productPrice: null
            // show: true
        }
    }

    // closeBt = () => {
    //     this.setState({ show: false })
    // }

    saveInputValue = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }
   
//     closeBt = () => {
//         this.setState({ show: false })
//    }

    // editProduct = (event) => {
    //      if(this.state.productName === '' ||
    //         this.state.productType === '' ||
    //         this.state.productDescription === '' ||
    //         this.state.purchaseDate === '' ||
    //         this.state.productPrice === 0) {
    //             alert('All fields must be filled out')
    //             event.preventDefault()
    //     } else {
    //         axios.put('http://127.0.0.1:8082/api/v1/products/:id', {
    //             productName: this.state.productName,
    //             productType: this.state.productType,
    //             productDescription: this.state.productDescription,
    //             purchaseDate: this.state.purchaseDate,
    //             productPrice: this.state.productPrice,
    //             _modified: new Date()
    //         } /*, { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
    //         .then(res => {
    //         console.log(res);
    //         })
    //         .catch(err => {
    //         console.log(err);
    //         alert('All the fields must be filled out in order to edit your product succesfuly!')
    //         });
    //         // store.dispatch(didUpdate(true))
    //         // store.dispatch(changeNewToEditProduct(false))
    //     }
    // }


    

    componentDidMount () {
        // this.setState({ loading: true })
        // console.log(loading)
        axios.get('http://127.0.0.1:8082/api/v1/products/' + this.props.match.params.id /*, 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
        .then((res) => {
                    this.setState({ edata: res.data })
                    console.log(edata)
               })
              .catch((error) => {
               console.log(error + ' Greska')
             // this.setState({ error: <Error />, loading: false })
        })
    }

    render () {

         return (
            <React.Fragment>
                   {/* <Navbar /> */}
                   <this.props.component toggle={false}/>
                <div id='newproducts'>
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
                                <input type="text" className="nptextfield" id='productName' 
                                //  onChange={this.saveInputValue} defaultValue={this.props.EdProductName}
                                 defaultValue={this.props.edname} /*defaultValue={this.props.data}*/ 
                                 /*value={this.EdProductName}*/ />
                           </p>
                           <p className='input-container'>
                                <label className="nplabel" >
                                    Product Type
                                </label>
                                <input type="text" className="nptextfield" id='productDescription' 
                                 onChange={this.saveInputValue} 
                                 defaultValue={this.props.EdProductType} />
                           </p>
                           <p className='input-container'>
                                <label className="nplabel" >
                                    Product Description
                                </label>
                                <input type="text" className="nptextfield" id='productType' 
                                 onChange={this.saveInputValue} 
                                 defaultValue={this.props.EdProductDescription} />
                           </p>
                           <p className='input-container'>
                                <label className="nplabel" >
                                    Purchase Date
                                </label>
                                <input type="date" className="nptextfield" id='purchaseDate' 
                                 onChange={this.saveInputValue} 
                                 defaultValue={this.props.EdPurchaseDate} />
                           </p>
                           <p className='input-container'>
                                <label className="nplabel" >
                                    Product Price
                                </label>
                                <input type="text" className="nptextfield" id='productPrice' 
                                 onChange={this.saveInputValue} 
                                 defaultValue={this.props.EdProductPrice} />
                           </p>
                           <div id='btnsNp'>
                           <button type='button' className='cp-button' /*onClick={this.editProduct}*/ >
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
                            <p id='simbol'><i className="fas fa-plus-circle" /></p>
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