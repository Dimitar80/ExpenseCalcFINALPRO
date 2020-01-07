import React from "react";
import "../../assets/styles/DeleteBox.css";
import "../../assets/styles/shared.css";

class DeleteBox extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //         data: this.props.ajdi
  //     }
  // }

  //   deleterow = (item) => {
  //     const newdata = this.state.data.filter(i => i._id !== item.id)
  //    //  this.setState({newdata})
  //    this.setState({data: newdata})
  //    //  console.log(this.state.newdata)
  // }

  render() {
    // console.log(this.newdata)
    //   console.log(this.props)
    // console.log(this.state.data)
    const id = this.props.ajdi;
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
              <button id="delete" onClick={() => this.props.delRow(id)}>
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
