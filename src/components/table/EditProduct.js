import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../assets/styles/EditProduct.css'
import '../../assets/styles/shared.css'

class EditProduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            edata: [],
            productName: null,
            productType: null,
            productDescription: null,
            purchaseDate: null,
            productPrice: null
        }
    }



    GetProductById = () =>{
        axios.get('http://127.0.0.1:8082/api/v1/products/' + this.props.match.params.id)
        .then((res) => {
            var ep = res.data
            console.log(ep)
                    this.setState({ edata: ep })
                    console.log('Existing generated _id - ' + this.state.edata[0]._id)
               })
              .catch((error) => {
               console.log(error + ' Greska')
        })
   } 
   
      componentDidMount(){
        this.GetProductById();
   }

    saveInputValue = (event) => {
    this.setState({[event.target.id]: event.target.value 
    // || {productName: this.state.productName}
})
    // console.log(event.target.id)
    console.log(event.target.value)
    }
    

    // put/patch
    editProduct = (event) => {
            if( this.state.productName === '' ||
                this.state.productType === '' ||
                this.state.productDescription === '' ||
                this.state.purchaseDate === '' ||
                this.state.productPrice === 0) {
                alert('All fields must be filled out')
                event.preventDefault()
        } else {
            axios.put('http://127.0.0.1:8082/api/v1/products/' + this.props.match.params.id, {
                productName: this.state.productName || this.state.edata[0].productName,
                productType: this.state.productType || this.state.edata[0].productType,
                productDescription: this.state.productDescription || this.state.edata[0].productDescription,
                purchaseDate: this.state.purchaseDate || this.state.edata[0].purchaseDate,
                productPrice: this.state.productPrice || this.state.edata[0].productPrice,
                _modified: new Date()
            } /*, { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
            .then(res => {
            console.log(res);
            // this.setState({ edata: ep })
            })
            .catch(err => {
            console.log(err);
            alert('All the fields must be filled out in order to edit your product succesfuly!')
            });
        }
    }



    render() {
        //   console.log(this.props);
          return(
            this.state.edata.length > 0 ?
            <React.Fragment>
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
                          onChange={this.saveInputValue}  
                          defaultValue={this.state.edata[0].productName} />
                    </p>
                    <p className='input-container'>
                         <label className="nplabel" >
                             Product Type
                         </label>
                         <input type="text" className="nptextfield" id='productDescription' 
                          onChange={this.saveInputValue} 
                          defaultValue={this.state.edata[0].productType} />
                    </p>
                    <p className='input-container'>
                         <label className="nplabel" >
                             Product Description
                         </label>
                         <input type="text" className="nptextfield" id='productType' 
                          onChange={this.saveInputValue} 
                          defaultValue={this.state.edata[0].productDescription} />
                    </p>
                    <p className='input-container'>
                         <label className="nplabel" >
                             Purchase Date
                         </label>
                         <input type="date" className="nptextfield" id='purchaseDate' 
                          onChange={this.saveInputValue} 
                          defaultValue={this.state.edata[0].purchaseDate.slice(0, 10)} />
                    </p>
                    <p className='input-container'>
                         <label className="nplabel" >
                             Product Price
                         </label>
                         <input type="text" className="nptextfield" id='productPrice' 
                          onChange={this.saveInputValue} 
                          defaultValue={this.state.edata[0].productPrice} />
                    </p>
                    <div id='btnsNp'>
                    <Link to={'/products'} >
                    <button type='button' className='cp-button'  onClick={this.editProduct} >
                        SAVE
                    </button>
                    </Link>
                    <Link to='/products'>
                    <button className='cl-button' >
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
            : <h2>Loading data...</h2>
          )
     }
}
export default EditProduct