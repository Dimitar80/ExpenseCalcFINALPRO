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
      sort: "",
      didUpd: false,
      loading: false,
      povik: null
    };
  }

  // SortProductsBy = event => {
  //   this.setState({
  //     sort: event.target.value
  //     // didUpd: true
  //   }),
  //     () => {
  //       if (this.state.sort !== null) {
  //         this.getSortedProducts();
  //       }
  //     }; // console.log(event);
  //   console.log("event target Value", event.target.value);
  // };

  SortProductsBy = event => {
    this.setState({
      sort: event.target.value,
      didUpd: true
      // povik: this.getSortedProducts()
    });
    // this.getSortedProducts();
    // console.log(event);
    console.log("event target Value", event.target.value);
  };

  getProducts = () => {
    this.setState({ loading: true });
    axios
      .get(`http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
      })
      .then(res => {
        // console.log(data);
        console.log("Data: ", res.data);
        // setTimeout(
        //   () => this.setState({ data: res.data, loading: false }),
        //   500
        // );
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  componentDidMount() {
    console.log("Table data did mount");
    this.getProducts();
    // this.getSortedProducts();
    console.log(this.state.data);
    console.log(this.state.sort);
  }

  getSortedProducts = () => {
    if (this.state.didUpd === true && this.state.sort !== "") {
      axios
        .get(`http://127.0.0.1:8082/api/v1/products/?sort=${this.state.sort}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        })
        .then(res => {
          // console.log(data);
          console.log("Data: ", res.data);
          this.setState({ data: res.data /*loading: false*/ });
        })
        .catch(err => {
          // this.setState({ loading: false });
          console.log(err, "ERROR at Products component");
        });
      this.setState({
        didUpd: false,
        // sort: null
        sort: ""
      });
    }
  };

  componentDidUpdate() {
    console.log("Table data did mount");
    this.getSortedProducts();
    // console.log(this.state.data);
    // console.log(this.state.sort);
  }

  // componentDidUpdate() {
  //   console.log("Get products", this.state.sort);
  //   // this.setState({ loading: true });
  //   // if (this.state.didUpd === true && this.state.sort != null) {
  //   //   axios
  //   //     .get(`http://127.0.0.1:8082/api/v1/products/?sort=${this.state.sort}`, {
  //   //       headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  //   //     })
  //   //     .then(res => {
  //   //       // console.log(data);
  //   //       console.log("Data: ", res.data);
  //   //       this.setState({ data: res.data /*loading: false*/ });
  //   //     })
  //   //     .catch(err => {
  //   //       // this.setState({ loading: false });
  //   //       console.log(err, "ERROR at Products component");
  //   //     });
  //   //   this.setState({
  //   //     didUpd: false,
  //   //     sort: null
  //   //   });
  //   // }
  //   this.getSortedProducts();
  // }

  render() {
    console.log("Component in render");
    const NavbarSur = this.props.component;
    console.log(this.state.data);

    // const sorts = this.state.sort;
    // console.log(sorts);
    // if (
    //   this.state.sort == "purchaseDate:desc" ||
    //   this.state.sort == "purchaseDate:asc"
    // ) {
    //   console.log("Rabote na Purchase Date");
    // }
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <NavbarSur toggle={false} />
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
                <select onChange={this.SortProductsBy}>
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
              sortS={this.state.sort}
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
