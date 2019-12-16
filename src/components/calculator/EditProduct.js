import React from 'react'
import '../../assets/styles/EditProduct.css'
import '../../assets/styles/shared.css'
// import { Link } from 'react-router-dom'


class EditProduct extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            // show: false
        }
    }

    render () {
        return (
            <React.Fragment>
                <div id="ep-main-container">
                
                    <div className="edit-container" id="editproduct-container">
                        <div id='npmaintitle'>
                         <h1>Edit Product</h1>
                        </div>
                        <form >
                            <p>
                                <label className="text-field-label">Product Name</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.id}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Product Type</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.name}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Product Description</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.username}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Purchase Date</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.email}></input>
                            </p>
                            <p>
                                <label className="text-field-label">Product Price</label> <br/>
                                <input type='text' className="text-field-input" defaultValue={this.props.street}></input>
                            </p>
                        <div id='btnsSC'>
                            <button className="sS-btn" id="ss-btn" >
                            SAVE
                            </button>
                            <button className="cls-btn" id="cl-btn"  
                            /*onClick={this.props.close}*/>
                            CLOSE
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                    </React.Fragment>
           
        )
    }
}

export default EditProduct