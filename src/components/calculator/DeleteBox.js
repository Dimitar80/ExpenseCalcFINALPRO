import React from 'react'
import '../../assets/styles/DeleteBox.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

class DeleteBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // showProducts: true,
        // showAlert: false,
        // didUpdate: false
        clicked: false,
        show: false
    }
}


  render(){
      return (
              <div id='delproducts'>
                 <div id='back-screen'>
                   <div id='delbox'>
                      <div id='boxtext'>
                         <h2>Delete Product</h2>
                         <p>You are about to delete this product.
                           Are you <br/>sure you wish to continue?
                         </p>
                      </div>
                      <div id='buttons'>
                         <button id='cancel' onClick={this.props.clBtn}>CANCEL</button>
                         <button id='delete'>DELETE</button>
                      </div>
                   </div>
                 </div>
              </div>
           )
       }
  }

export default DeleteBox

