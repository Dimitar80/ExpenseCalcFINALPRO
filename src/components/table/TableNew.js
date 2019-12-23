import React from 'react'
import axios from 'axios'
import '../../assets/styles/shared.css'
import '../../assets/styles/Table.css'
import { Link } from 'react-router-dom'
import DeleteBox from '../calculator/DeleteBox'
import Product from './Product'


class TableNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            udata: []

        }
    }

    delBox = () => {
        this.setState({ show: !this.state.show })
    }

    closeBt = () => {
        this.setState({ show: false })
   }
    
   componentDidMount () {
    // this.setState({ loading: true })
    // console.log(loading)
    axios.get('http://127.0.0.1:8081/api/v1/products' /*, 
    { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
    .then((response) => {
        var c = response.data
        // let users = []
        console.log(c)
               let users = c.map((product) => {
                return (<Product      
                      key={product._id} 
                      id={product._id}
                      productName={product.productName}
                      productType={product.productType}
                      productDescription={product.productDescription}
                      purchaseDate={product.purchaseDate}
                      productPrice={product.productPrice}
                    //   showEdDel={this.showEditDelete}
                      /*del={this.delrow}*/ />
                    )
                })
                this.setState({ udata: users })
                // console.log(users)
                console.log(this.state.udata)
                // console.log(this.state.udata.length - 1)
                // console.log(this.state.udata.name)
            })
    .catch((error) => {
        console.log(error + ' Greska')
        // this.setState({ error: <Error />, loading: false })
    })
}


    
  render () {
        return (
            <div className="products-table-container">
                <table id="pmaintable">
                    <thead className="products-table-head">
                        <tr>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Description</th>
                            <th>Purchase Date</th>
                            <th>Product Price</th>
                            {this.props.showEdDel ? 
                            <th>Edit / Delete</th> : 
                            <th></th>}
                        </tr>
                    </thead>
                    <tbody className="products-table-body">
                        {/* <TbodyData {...this.props}/> */}
                        {/* {this.state.udata} */}
                    <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        {this.props.showEdDel ? 
                        <td>
                            <Link to='/editproduct'>
                               <button id='editbtn' className="far fa-edit">
                               </button>
                            </Link>
                               <button id='delbtn' className="far fa-trash-alt" onClick={this.delBox}>
                               </button>
                        </td> 
                         : <td></td>}
                    </tr>
                    </tbody>
                       {this.state.show && <DeleteBox  clBtn={this.closeBt} />}
                </table>
            </div>
        )
    }
}

export default TableNew