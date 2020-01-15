import React from "react";
import axios from "axios";
import "../../assets/styles/ProductsNew.css";
import "../../assets/styles/shared.css";
import { Link } from "react-router-dom";
import TableAll from "../table/TableAll";

// document.body.style.backgroundColor = 'blue';

class ProductsNew extends React.Component {
  constructor() {
    super();
    this.state = {
      // showProducts: true,
      showEditDeleteBtns: true,
      data: [],
      sort: null,
      didUpd: false
    };
  }

  SortProduct = event => {
    this.setState({
      sort: event.target.value,
      didUpd: true
    });
    // console.log(event);
    console.log("Value", event.target.value);
  };

  getProducts = () => {
    axios
      .get(
        `http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc` /*,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        // console.log(data);
        console.log("Data: ", res.data);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("Table data did mount");
    console.log(this.state.data);
    this.getProducts();
    console.log(this.state.sort);
  }

  componentDidUpdate() {
    // this.getProducts();
    console.log("Get products", this.state.sort);
    if (this.state.didUpd === true && this.state.sort != null) {
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?sort=${this.state.sort}` /*,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
        )
        .then(res => {
          // console.log(data);
          console.log("Data: ", res.data);
          this.setState({ data: res.data });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({
        didUpd: false,
        sort: null
      });
    }
  }
  render() {
    console.log("Component in render");
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <this.props.component toggle={false} />
        <div id="products">
          {/* PORTAL */}
          {/* HEADER */}
          <div className="prmain-container">
            <div id="pmaintitle">
              <div className="tit">
                <h1>Products</h1>
              </div>
              <div id="filter">
                <h2>Sort by:</h2>
                <select onChange={this.SortProduct}>
                  <option value="purchaseDate:desc">Latest Purchase</option>
                  <option value="purchaseDate:asc">First Purchase</option>
                  <option value="productPrice:desc">Highest Price</option>
                  <option value="productPrice:asc">Lowest Price</option>
                </select>
              </div>
            </div>
            <TableAll
              data={this.state.data}
              showEdDel={this.state.showEditDeleteBtns}
              fgetProducts={this.getProducts}
            />
          </div>
          <div id="mainonebtn">
            <Link
              to="/newproduct"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <button id="btnnewproduct">NEW PRODUCT</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsNew;
