import React from 'react'
import '../../assets/styles/ProductsNew.css'
import '../../assets/styles/shared.css'
import '../../assets/styles/Table.css'
import { Link } from 'react-router-dom'
import DeleteBox from '../calculator/DeleteBox'


class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,

        }
    }

    delBox = () => {
        this.setState({ show: !this.state.show })
    }

    closeBt = () => {
        this.setState({ show: false })
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
                            {this.props.showEdDel ? <th>Edit / Delete</th> : <th></th>}
                            
                        </tr>
                    </thead>
                    <tbody className="products-table-body">
                        {/* <TbodyData {...this.props}/> */}
                    <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>
                        <td>TEST</td>

                       {this.props.showEdDel ? 
                        <td>
                            <Link to='/editproduct'>
                               <button id='editbtn' className="far fa-edit" /*onClick={this.sendEditItemToStore}*/>
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

export default Table