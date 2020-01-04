import React from 'react'
import axios from 'axios'
import '../../assets/styles/shared.css'
import '../../assets/styles/Table.css'
import DeleteBox from '../calculator/DeleteBox'
import ProductRow from './ProductRow'
import EditProduct from './EditProduct'



class TableData extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // show: false,
            udata: [],
            // showEditDelete: true,
            rowIdToDelete: null,


        }
    }

    delBox = (id) => {
        this.setState({ show: !this.state.show, rowIdToDelete: id })
        console.log("ID: ", id)
    }

    closeBt = () => {
        console.log("Function called")
        this.setState({ show: false })
   }

   deleteRow = (id) => {
       axios.delete('http://127.0.0.1:8082/api/v1/products/' + id).then((res) => {
           this.setState({show: false})
            console.log("Deleted: ", res)
            this.getProducts()
           })
          .catch((error) => {
           console.log(error + ' Greska')
    })
   }

   getProducts = () => {
    axios.get('http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:asc' /*, 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/)
        .then((response) => {
            var p = response.data
                let products = p.map((product) => {       
                    return (<ProductRow      
                        key={product._id} 
                        productId={product._id}
                        productName={product.productName}
                        productType={product.productType}
                        productDescription={product.productDescription}
                        purchaseDate={product.purchaseDate.slice(0, 10)}
                        productPrice={product.productPrice}
                        EdDel={this.props.showEdDel}
                        del={this.delBox} />
                        )
                    })
                    this.setState({ udata: products })
                    // console.log(this.state.udata)
                    // console.log(this.state.udata[0].props.productName)
            })
            .catch((error) => {
            console.log(error + ' Greska')
            // this.setState({ error: <Error />, loading: false })
        })
   }
    
   componentDidMount () {
    // this.setState({ loading: true })
    // console.log(loading)
    this.getProducts()
}

    render () {
        return (
            <React.Fragment>
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
                        {this.state.udata}
                    </tbody>
                       {/* {this.state.show && <DeleteBox  clBtn={this.closeBt} />} */}
                       {/* {this.state.show && <EditProduct  data={this.state.udata} />} */}
                </table>
                {this.state.show && 
                <DeleteBox 
                    ajdi={this.state.rowIdToDelete}
                    clBtn={this.closeBt}
                    deleteRow={this.deleteRow}
                />}
            </div>
            </React.Fragment>
        )
    }
}

export default TableData