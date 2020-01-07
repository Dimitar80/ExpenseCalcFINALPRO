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
      // show: false,
      rowIdToDelete: null,
      redirect: false
    };
  }

  //   deleterow = (item) => {
  //     const newdata = this.state.data.filter(i => i._id !== item.id)
  //    //  this.setState({newdata})
  //    this.setState({data: newdata})
  //    //  console.log(this.state.newdata)
  // }

  // delBox = id => {
  //   this.setState({ show: !this.state.show, rowIdToDelete: id });
  //   console.log("ID: ", id);
  // };

  closeBt = () => {
    console.log("Function called");
    this.setState({ show: false });
  };

  deleteRow = id => {
    axios
      .delete("http://127.0.0.1:8082/api/v1/products/" + id)
      .then(res => {
        this.setState({ show: false /*redirect: true*/ });
        console.log(id);
        // axios.get(
        //   "http://127.0.0.1:8082/api/v1/products/?sort=purchaseDate:desc"
        // );

        // this.setState({ redirect: true });
        console.log("Deleted: ", res);
        // this.getProducts()
        // <TableBody {...this.props} del={this.delBox} />;
      })
      .catch(error => {
        console.log(error + " Greska");
      });
  };

  render() {
    console.log(this.props);
    // console.log(this.state.data)
    const id = this.props.ajdi;

    // const { redirect } = this.state;
    // if (redirect) {
    //   return <Redirect to="/products" />;
    // }
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
              <button id="cancel" onClick={this.closeBt}>
                CANCEL
              </button>
              <button id="delete" onClick={() => this.deleteRow(id)}>
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
