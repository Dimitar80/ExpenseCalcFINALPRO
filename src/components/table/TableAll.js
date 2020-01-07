import React from "react";
import axios from "axios";
import "../../assets/styles/shared.css";
import "../../assets/styles/Table.css";
import { Redirect } from "react-router-dom";
import DeleteBox from "../calculator/DeleteBox";
import TableBody from "./TableBody";

class TableAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: false,
      udata: [],
      // showEditDelete: true,
      loading: false
      // rowIdToDelete: null,
      // redirect: false
    };
  }

  delBox = id => {
    this.setState({ show: !this.state.show, rowIdToDelete: id });
    console.log("ID: ", id);
  };

  // closeBt = () => {
  //   console.log("Function called");
  //   this.setState({ show: false });
  // };

  // deleteRow = id => {
  //   axios
  //     .delete("http://127.0.0.1:8082/api/v1/products/" + id)
  //     .then(res => {
  //       // this.setState({ show: false, redirect: true });
  //       console.log(id);
  //       this.setState({ redirect: true });
  //       console.log("Deleted: ", res.data);
  //       // this.getProducts()
  //       // <TableBody {...this.props} del={this.delBox} />;
  //     })
  //     .catch(error => {
  //       console.log(error + " Greska");
  //     });
  // };

  render() {
    console.log(this.props);
    // console.log(this.props.data);
    // console.log(this.getProducts);
    // const { redirect } = this.state;
    // if (redirect) {
    //   return <Redirect to="/products" />;
    // }
    return (
      // this.state.udata.length > 0 ?
      <React.Fragment>
        {/* <div className="products-table-container"> */}
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
            <TableBody {...this.props} del={this.delBox} />
          </tbody>
        </table>
        {this.state.show && (
          <DeleteBox
            ajdi={this.state.rowIdToDelete}
            // clBtn={this.closeBt}
            // delRow={this.deleteRow}
          />
        )}
        {/* </div> */}
      </React.Fragment>
      // : <h2>Loading data...</h2>
      /*: <h2>Loading data...</h2>*
     /*: <h2>Loading data...</h2>*/
     /*: <h2>Loading data...</h2>*/);
  }
}

export default TableAll;
