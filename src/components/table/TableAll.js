import React from "react";
import axios from "axios";
import "../../assets/styles/shared.css";
import "../../assets/styles/Table.css";
// import { Redirect } from "react-router-dom";
import DeleteBox from "../calculator/DeleteBox";
import TableBody from "./TableBody";

class TableAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: false,
      udata: [],
      // showEditDelete: true,
      // loading: false,
      rowIdToDelete: null
      // xmm: this.props.sortS
      // show: true
    };
  }

  delBoxOpen = id => {
    this.setState({
      show: !this.state.show,
      rowIdToDelete: id
    });
    // console.log("ID: ", id);
  };
  closeBt = () => {
    console.log("Function called");
    this.setState({ show: false });
  };

  deleteRow = id => {
    axios
      .delete("http://127.0.0.1:8082/api/v1/products/" + id, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      })
      .then(res => {
        this.setState({ show: false });
        console.log("Deleted: ", res);
        this.props.fgetProducts(); // Povik do baza-nov call!!!???
        console.log(this.props.fgetProducts);
      })
      .catch(error => {
        console.log(error + " Greska");
      });
  };

  purcDates = () => {
    if (
      this.props.sortS == "purchaseDate:desc" ||
      this.props.sortS == "purchaseDate:asc"
    ) {
      console.log("Pashe");
    }
  };

  render() {
    // console.log(this.props);
    // console.log(this.state.show + " - od kade ide ova true?");
    // console.log(this.props.data);

    console.log(this.props.sortS);
    if (this.props.sortS == "productPrice:asc") {
      console.log("seleceted pP:asc");
    }
    if (this.props.sortS == "productPrice:desc") {
      console.log("seleceted pP:desc");
    }
    if (this.props.sortS == "pupchaseDate:asc") {
      console.log("seleceted pD:asc");
    }
    if (this.props.sortS == "pupchaseDate:desc") {
      console.log("seleceted pD:desc");
    }

    return (
      // this.state.udata.length > 0 ?
      <React.Fragment>
        {/* <div className="products-table-container"> */}
        <table id="emaintable">
          <thead className="products-table-head">
            <tr>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Product Description</th>

              {this.props.sortS == "purchaseDate:desc" ||
              this.props.sortS == "purchaseDate:asc" ? (
                <th style={{ backgroundColor: "green" }}>Purchase Date</th>
              ) : (
                <th style={{ backgroundColor: "orange" }}>Purchase Date</th>
              )}

              <th>Product Price</th>
              {this.props.showEdDel ? <th>Edit / Delete</th> : <th></th>}
            </tr>
          </thead>
          <tbody className="products-table-body">
            <TableBody {...this.props} delBtnOpen={this.delBoxOpen} />
          </tbody>
        </table>
        {this.state.show && (
          <DeleteBox
            ajdi={this.state.rowIdToDelete}
            clBtn={this.closeBt}
            delRow={this.deleteRow}
            proba={this.props.data}
          />
        )}
        {/* </div> */}
      </React.Fragment>
      // : <h2>Loading data...</h2>
      /*: <h2>Loading data...</h2>*/
      /*: <h2>Loading data...</h2>*/
      /*: <h2>Loading data...</h2>*/
      /*: <h2>Loading data...</h2>*/
     /*: <h2>Loading data...</h2>*/);
  }
}

export default TableAll;
