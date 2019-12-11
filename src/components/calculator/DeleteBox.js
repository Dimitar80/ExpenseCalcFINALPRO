import React from 'react'
import '../../assets/styles/DeleteBox.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

const DeleteBox = () => {
return (
<div id='delproducts'>
   <div id='general-screen'>
   </div>
   <div id='delbox'>
      <div id='boxtext'>
      <h2>Delete Product</h2>
      <p>You are about to delete this product.
        Are you <br/>sure you wish to continue?
      </p>
      </div>
      <div id='buttons'>
      < Link to ='products'><button id='cancel'>CANCEL</button></Link>
      <button id='delete'>DELETE</button>
      </div>
   </div>
   </div>
 )
}
export default DeleteBox

