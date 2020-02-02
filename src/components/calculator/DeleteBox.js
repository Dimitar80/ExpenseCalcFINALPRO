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

  // keyPressed(event) {
  //   if (event.key === "Enter") {
  //     // this.submitMessage()
  //     this.props.delRow(this.props.ajdi);
  //     alert("Enter is functioning");
  //   }
  // }

  render() {
    // console.log(this.props);
    // console.log(this.state.data)
    // console.log(this.state.show);
    // console.log(this.state.toggle);
    const id = this.props.ajdi;
    // console.log(this.props.proba[0].productName, "TESTIS");
    // console.log(this.props.proba, "TESTIS");

    const names = this.props.proba;

    let pN = null;
    for (let i = 0; i < names.length; i++) {
      if (names[i]._id == id) {
        pN = names[i].productName;
      }
    }

    return (
      <div id="delproducts">
        <div id="back-screen">
          <div id="delbox">
            <div id="boxtext">
              <h2>Delete Product</h2>
              <p>
                You are about to delete this product -
                <span style={{ fontWeight: "900", fontSize: "18px" }}>
                  {pN}
                </span>
                <br />
                Are you sure you want to continue?
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
