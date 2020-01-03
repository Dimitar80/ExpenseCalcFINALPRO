import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/shared.css'
import EditProduct from './EditProduct'

// FUNKCIONALNA COMP-BIDEJKI E SAMO REPRESENT
class ProductRow extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        this.state = {
            // show: false
        }
    }
   
    // delBox = () => {
    //     this.setState({ show: !this.state.show })
    // }

   
    render () {
        // console.log(this.props.productId)
        return (
            <React.Fragment>
            <tr /*{...this.props.key}*/>
                {/* <td>{this.props.id}</td> */}
                <td>{this.props.productName}</td>
                <td>{this.props.productType}</td>
                <td>{this.props.productDescription}</td>
                <td>{this.props.purchaseDate}</td>
                <td>{this.props.productPrice}</td>
                {this.props.EdDel ? 
                <td>
                       {/* <Link to='/editproduct'> */}
                    <Link to={"/editproduct/" + this.props.productId} >
                        <button id='editbtn' className="far fa-edit" />
                    </Link>
                        <button id='delbtn' className="far fa-trash-alt" onClick={this.props.del} />
                </td> 
              : <td></td>}
            </tr>
             </React.Fragment>
        )
    }
}

export default ProductRow