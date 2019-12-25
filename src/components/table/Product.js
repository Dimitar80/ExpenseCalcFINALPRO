import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/ProductsNew.css'
import '../../assets/styles/shared.css'
import DeleteBox from '../calculator/DeleteBox'


class Product extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
   
    delBox = () => {
        this.setState({ show: !this.state.show })
    }

    render () {
        return (
            <tr>
                <td>{this.props.productName}</td>
                <td>{this.props.productType}</td>
                <td>{this.props.productDescription}</td>
                <td>{this.props.purchaseDate}</td>
                <td>{this.props.productPrice}</td>
                {this.props.showEdDel ? 
                <td>
                    <Link to='/editproduct'>
                        <button id='editbtn' className="far fa-edit">
                        </button>
                    </Link>
                        <button id='delbtn' className="far fa-trash-alt" onClick={this.props.del}>
                        </button>
                </td> 
              : <td></td>}
            </tr> 

        )
    }
}

export default Product