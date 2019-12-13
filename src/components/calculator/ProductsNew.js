import React from 'react'
import '../../assets/styles/Products.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
import Table from '../table/Table'
import Navbar from './Navbar'
import DeleteBox from './DeleteBox'

// document.body.style.backgroundColor = 'blue';

class ProductsNew extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            clicked: false,
            show: false
        }
    }

         handleMouseOver(e) {
             console.log(e.target, e.target.id, e.pageX)
            //  console.log('hovered')
         }

        //    Prilagodi ja funkcijava kako kaj HEADER-ot vo react-app-Redux
        //    Bidejki vaka e samo On/Off
           //e- event object//
         CldBtn = (e) => {
            console.log(e.target.id)
            // this.setState({ clicked: !this.state.clicked });
            this.setState({ orange: !this.state.orange });
            // alert("Kliknato")
        }

        // componentDidMount () {
        //     // this.setState({ loading: true })
        //     // console.log(loading)
        //     axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => {
        //         var c = response.data
        //         // let users = []
        //         console.log(c)
        //                let users = c.map((user) => {
        //                 return (<User      
        //                       key={user.id} 
        //                       id={user.id}
        //                       name={user.name}
        //                       username={user.username}
        //                       email={user.email}
        //                       street={user.address.street}
        //                       suite={user.address.suite}
        //                     //   ex={props.showOrHide}
        //                       del={this.delrow} />
        //                     )
        //                 })
        //                 this.setState({ udata: users })
        //                 // console.log(users)
        //                 console.log(this.state.udata)
        //                 // console.log(this.state.udata.length - 1)
        //                 // console.log(this.state.udata.name)
        //             })
        //     .catch((error) => {
        //         console.log(error + ' Greska')
        //         this.setState({ error: <Error />, loading: false })
        //     })
        // }

        delBox = (event) => {
            // if(!)
            this.setState({ show: !this.state.show })
        }

        closeBt = (event) => {
            this.setState({ show: false })
        }

    render() {
    
         return (
             <React.Fragment>
             <div id='products'>
                 <Navbar />
             
        {/* PORTAL */}
           <div className='prmain-container'>
                  <div id='pmaintitle'>
                     <div className='tit'>
                         <h1>Products</h1>
                     </div>
                     <div id='filter'>
                         <h2>Filter by:</h2>
                         <select>
                           <option>Year</option>
                           <option>Highest Price</option>
                           <option>Lowest Price</option>
                           <option>Latest Purchases</option>
                         </select>
                     </div>
                  </div>
              {/* Static Table START */}
              <table id='pmaintable'>
                  <thead>
                  <tr>
                      <th>Product Name</th>
                      <th>Product Type</th>
                      <th>Product Description</th>
                      <th>Purchase Date</th>
                      <th>Product Price</th>
                      <th>Product Options</th>
                  </tr>
                  </thead>
            
                  <tbody>
                  <tr>
                      <td>Coca-cola</td>
                      <td>Drink</td>
                      <td>carbonated soft drink</td>
                      <td>19.04.2019</td>
                      <td>75</td>
                      <td /*style={{textAlign:'center'}}*/ >     
                      <button id='editbtn'><i className="far fa-edit" /></button>
                      <button id='delbtn' onClick={this.delBox}><i className="far fa-trash-alt" /></button>
                      </td>
                  </tr>
                  </tbody>
                  {this.state.show && <DeleteBox  clBtn={this.closeBt} />}
              </table>
              {/* {this.state.show && <DeleteBox  clBtn={this.closeBt} />} */}
              {/* Static Table END*/}

              <h2 id='testTitle'>Testing FInal Expense Calculator - NEW</h2>
              <hr id='testing'/>
              {/* Header Title part START */}
              <div id='pmaintitle'>
                     <div className='tit'>
                         <h1>Products</h1>
                     </div>
                     <div id='filter'>
                         <h2>Filter by:</h2>
                         <select>
                           <option>Year</option>
                           <option>Highest Price</option>
                           <option>Lowest Price</option>
                           <option>Latest Purchases</option>
                         </select>
                     </div>
                  </div>
                  {/* Header Title part END */}
              <Table />
                  {/* <Table showProducts={this.state.showProducts} 
                            deleteAlert={this.deleteAlert} /> */}
          </div>
                <div id='mainonebtn'>
                      < Link to = 'newproduct' style={{textDecoration: 'none', color: '#fff'}}>
                  <button id ='btnnewproduct'>NEW PRODUCT</button>
                      </ Link>
                   </div>
                </div>
        </React.Fragment>
       )
    }
}

export default ProductsNew