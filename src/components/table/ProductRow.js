import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/shared.css";

// FUNKCIONALNA COMP-BIDEJKI E SAMO REPRESENT
class ProductRow extends React.Component {
  constructor(/*props*/) {
    super(/*props*/);
    this.state = {
      // show: false
      prooo: this.props
    };
  }

  // delBox = () => {
  //     this.setState({ show: !this.state.show })
  // }

  render() {
    // let totalSpent = 0
    // for (let i = 0; i < this..length; i++) {
    //     totalSpent += this.props[i].productPrice
    //     console.log(this.props[i].productPrice)
    // }
    // console.log(totalSpent)
    // console.log(this.props.productId);
    return (
      <React.Fragment>
        <tr /*{...this.props.key}*/>
          {/* <td>{this.props.id}</td> */}
          <td>{this.props.productName}</td>
          <td>{this.props.productType}</td>
          <td>{this.props.productDescription}</td>
          <td>{this.props.purchaseDate}</td>
          <td>{this.props.productPrice}</td>
          {this.props.EdDel ? (
            <td>
              <Link to={"/editproduct/" + this.props.productId}>
                <button id="editbtn" className="far fa-edit" />
              </Link>
              <button
                id="delbtn"
                className="far fa-trash-alt"
                onClick={() => this.props.del(this.props.productId)}
              />
            </td>
          ) : (
            <td></td>
          )}
        </tr>
      </React.Fragment>
    );
  }
}

export default ProductRow;
