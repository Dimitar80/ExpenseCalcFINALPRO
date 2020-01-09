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
      // edit: false
    };
  }

  SortProduct = event => {
    this.setState({
      sort: event.target.value
    });
    console.log(event);
    console.log("Value", event.target.value);
  };

  /*componentDidMount()*/ getProducts = () => {
    axios
      .get(
        "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc" /*,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        // const pUp = res.data
        // console.log(pUp)
        this.setState({ data: res.data /*, loading: false*/ });
        // console.log(data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("Table data did mount");
    this.getProducts();
  }

  componentDidUpdate() {
    const { sort } = this.state;
    console.log("Component did update", sort);
    if (this.state.sort != null) {
      console.log("Sort in component did mount", this.state.sort);
      axios
        .get(
          `http://127.0.0.1:8082/api/v1/products/?sort=${this.state.sort}` /*,
                  { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
          /*+ this.state.sort*/
        )
        .then(res => {
          // const pUpSort = res.data
          // console.log(pUpSort)
          this.setState({ data: res.data /*, loading: false*/ });
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentSort = this.state.sort;
    const nextSort = nextState.sort;
    console.log("Should Component update", currentSort, nextSort);
    if (currentSort === nextSort && currentSort !== null) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log(this.state.sort);
    console.log(this.state.data);
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
                  <option value="purchaseDate:asc">Latest Purchase</option>
                  <option value="purchaseDate:desc">First Purchase</option>
                  <option value="productPrice:asc">Highest Price</option>
                  <option value="productPrice:desc">Lowest Price</option>
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
