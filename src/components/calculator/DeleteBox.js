import React from "react";
import axios from "axios";
import "../../assets/styles/DeleteBox.css";
import "../../assets/styles/shared.css";
import { Redirect } from "react-router-dom";

class DeleteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.ajdi
      toggle: true,
      rowIdToDelete: null
      // redirect: false
      // show: this.props.show
    };
  }

  // getProducts = () => {
  //   axios
  //     .get(
  //       "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc" /*,
  //     { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
  //     )
  //     .then(res => {
  //       this.setState({ data: res.data /*, loading: false*/ });
  //       // console.log(data);
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // componentDidMount() {   ???
  //   this.getProducts()
  // }

  // keyPressed(event) {
  //   if (event.key === "Enter") {
  //     // this.submitMessage()
  //     this.props.delRow(this.props.ajdi);
  //     alert("Enter is functioning");
  //   }
  // }

  render() {
    // console.log(this.keyPressed);
    // console.log(this.props);
    // console.log(this.state.data)
    console.log(this.state.show);
    // console.log(this.state.toggle);
    const id = this.props.ajdi;
    // console.log(this.props.proba[0].productName, "TESTIS");
    console.log(this.props.proba, "TESTIS");
    const names = this.props.proba;
    console.log(names);
    // console.log(this.props.proba[0].productName);

    let pN = null;
    for (let i = 0; i < names.length; i++) {
      if (names[i]._id == id) {
        // console.log(names[i].productName);
        pN = names[i].productName;
        console.log(pN);
      }
    }

    return (
      <div id="delproducts">
        <div id="back-screen">
          <div id="delbox">
            <div id="boxtext">
              <h2>Delete Product</h2>
              <p>
                You are about to delete this product -{" "}
                <span style={{ fontWeight: "900", fontSize: "18px" }}>
                  {pN}
                </span>
                <br />
                Are you sure you wish to continue?
              </p>
            </div>
            <div id="delBox-buttons">
              <button id="cancel" onClick={this.props.clBtn}>
                CANCEL
              </button>
              <button
                id="delete"
                onClick={() => this.props.delRow(id)}
                /*onKeyPress={this.keyPressed}*/
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteBox;
