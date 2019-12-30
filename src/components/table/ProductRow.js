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

    showOrHide = (event) => {
        console.log(event.target.id)
        /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojot render metod odnovo
        (ASINHRONA E, PAZETE! noviot state moze da go procitate
            samo vo render i so callback) */
        this.setState({ show: !this.state.show });
        console.log("Button clicked...")
        // let buttonText = this.state.expText === "Expand" ? "Close" : "Expand"
        // this.setState({expText: buttonText});
    }

    render () {
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
                    <Link to={"/editproduct/:id" + this.props.productId}>
                        <button id='editbtn' className="far fa-edit" /*onClick={this.showOrHide}*/ />
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