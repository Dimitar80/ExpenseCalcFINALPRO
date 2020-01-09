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
      rowIdToDelete: null,
      redirect: false
      // show: this.props.show
    };
  }

  // cancelBtn = () => {
  //   console.log("Function called");
  //   this.setState({ show: !this.state.show });
  //   console.log(this.state.show);
  //   // this.setState({ redirect: true });
  //   // this.setState({ toggle: false });
  //   // console.log(this.state.toggle);
  // };

  getProducts = () => {
    axios
      .get(
        "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc" /*,
      { headers: {"Authorization" : `Bearer ${localStorage.getItem('jwt')}`}}*/
      )
      .then(res => {
        this.setState({ data: res.data /*, loading: false*/ });
        // console.log(data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // componentDidMount() {   ???
  //   this.getProducts()
  // }

  keyPressed(event) {
    if (event.key === "Enter") {
      // this.submitMessage()
      this.props.delRow(this.props.ajdi);
      alert("Enter is functioning");
    }
  }

  render() {
    console.log(this.keyPressed);
    // console.log(this.props);
    // console.log(this.state.data)
    console.log(this.state.show);
    // console.log(this.state.toggle);
    const id = this.props.ajdi; //SAMO TUKA LI MORA???
    return (
      <div id="delproducts">
        <div id="back-screen">
          <div id="delbox">
            <div id="boxtext">
              <h2>Delete Product</h2>
              <p>
                You are about to delete this product. Are you <br />
                sure you wish to continue?
              </p>
            </div>
            <div id="buttons">
              <button id="cancel" onClick={this.props.clBtn}>
                CANCEL
              </button>
              <button
                id="delete"
                onClick={() => this.props.delRow(id)}
                onKeyPress={this.keyPressed}
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
