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
      // showAlert: false,
      // didUpdate: false
      showEditDelete: true,
      data: [],
      sort: null
    };
  }

  SortProduct = event => {
    this.setState({
      sort: event.target.value
    });
    // console.log(event);
    console.log("Value", event.target.value);
  };

  getProducts = () => {
    console.log("Get products", this.state.sort);
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
  }

  componentDidUpdate() {
    console.log("Component did update, loading: " /*this.state.loading*/);
    // this.getProducts();
    console.log("Get products", this.state.sort);
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentSort = this.state.sort;
    console.log(currentSort);
    const nextSort = nextState.sort;
    console.log(nextSort);
    const dataLength = this.state.data.length;
    console.log(dataLength);
    // const loading = this.state.loading;
    console.log(
      "Should Component update",
      "Current sort - ",
      currentSort,
      ", ",
      "NexSort - ",
      nextSort /*loading*/
    );
    if (currentSort !== nextSort || dataLength === 0) {
      console.log("Update");
      return true;
    } else {
      console.log("No Update");
      return false;
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
              showEdDel={this.state.showEditDelete}
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
