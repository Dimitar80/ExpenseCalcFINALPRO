import React from 'react'
import '../../assets/styles/ProductsNew.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
import TableData from '../table/TableData'


// document.body.style.backgroundColor = 'blue';

class ProductsNew extends React.Component  {
    constructor() {
        super()
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            showEditDelete: true,
            show: true
            // edit: false
        }
    }

        //  handleMouseOver(e) {
        //      console.log(e.target, e.target.id, e.pageX)
        //      console.log('hovered')
        //  }
        
       


    render() {
    
         return (
             <React.Fragment>
                         {/* <Navbar /> */}
                         <this.props.component toggle={false}/>
              <div id='products'>
                       {/* PORTAL */}
                       {/* HEADER */}
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
                        <TableData showEdDel={this.state.showEditDelete} />
                   </div>
                   <div id='mainonebtn'>
                        < Link to = '/newproduct' style={{textDecoration: 'none', color: '#fff'}}>
                            <button id ='btnnewproduct'>NEW PRODUCT</button>
                        </Link>
                   </div>
              </div>
        </React.Fragment>
       )
    }
}

export default ProductsNew