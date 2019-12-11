import React from 'react'
import '../../assets/styles/Products.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

// document.body.style.backgroundColor = 'blue';

class Products extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            or: true,
        }
    }

         handleMouseOver(e) {
             console.log(e.target, e.target.id, e.pageX)
            //  console.log('hovered')
         }
           //e- event object//
         CldBtn = (e) => {
            console.log(e.target.id)
            this.setState({ or: !this.state.or });
            alert("Kliknato")
        }
    
    render() {
        
        let btn_class = this.state.or ? "orangeButton" : "whiteButton";

         return (
             <React.Fragment>
             <div id='products'>
             <header id='header'>
                 <nav id='mainnav'>
                 < Link to= '/' style={{textDecoration: 'none', color: '#576574'}}>
                     <button id='bthome' >HOME</button>
                 </Link>  

                 < Link to= 'products' style={{textDecoration: 'none', color: '#1DD1A1'}} >
                     <button id='btproducts' onClick={this.CldBtn} onMouseOver = {this.handleMouseOver}
                     className={btn_class} >
                         PRODUCTS
                     </button>
                 </Link>
            
                 < Link to= 'expenses' /*style={{textDecoration: 'none', color: '#576574'}}*/>
                     <button id='btexpenses'onClick={this.CldBtn} className={btn_class} >
                         EXPENSES
                     </button>
                 </Link>
                 </nav>
                 <div className="user">
                     <img src="../img/DPPHOTO.jpg" alt="profileimg" />
                     <h2>User name</h2>
                 </div>
             </header>
        {/* BODY */}
     <div className='prmain-container'>
            <div id='pmaintitle'>
               <div className='tit'>
                   <h1>Products</h1>
               </div>
               <div id='filter'>
                   <h2>Filter by:</h2>
                   <select>
                     <option>Year</option>
                     <option>Highest Price</option>
                     <option>Lowest Price</option>
                     <option>Latest Purchases</option>
                   </select>
               </div>
            </div>

        <table id='pmaintable'>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Type</th>
                <th>Product Description</th>
                <th>Purchase Date</th>
                <th>Product Price</th>
                <th>Product Options</th>
            </tr>
            </thead>
            
            <tbody>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
            </tr>
            <tr>
                <td>Coca-cola</td>
                <td>Drink</td>
                <td>carbonated soft drink</td>
                <td>19.04.2019</td>
                <td>75</td>
                <td><span><i className="far fa-edit"></i></span>
                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                    <span>
                    <i className="far fa-trash-alt"></i>
                    </span>
                    </Link>
                </td>
                </tr>
                <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td><span><i className="far fa-edit"></i></span>
                    <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                        <span>
                        <i className="far fa-trash-alt"></i>
                        </span>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td><span><i className="far fa-edit"></i></span>
                    <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                        <span>
                        <i className="far fa-trash-alt"></i>
                        </span>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>19.04.2019</td>
                    <td>75</td>
                    <td><span><i className="far fa-edit"></i></span>
                    <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                        <span>
                        <i className="far fa-trash-alt"></i>
                        </span>
                        </Link>
                    </td>
                </tr>
                <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>carbonated soft drink</td>
                        <td>19.04.2019</td>
                        <td>75</td>
                        <td><span><i className="far fa-edit"></i></span>
                            <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                            <span>
                            <i className="far fa-trash-alt"></i>
                            </span>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>carbonated soft drink</td>
                            <td>19.04.2019</td>
                            <td>75</td>
                            <td><span><i className="far fa-edit"></i></span>
                                <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                                <span>
                                <i className="far fa-trash-alt"></i>
                                </span>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                                <td>Coca-cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>19.04.2019</td>
                                <td>75</td>
                                <td>
                                    <span><i className="far fa-edit"></i></span>
                                  <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                                    <span>
                                    <i className="far fa-trash-alt"></i>
                                    </span>
                                  </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Coca-cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>19.04.2019</td>
                                <td>75</td>
                                <td>
                                  <span id='row'><i className="far fa-edit"></i>
                                  <Link to='delbox' style={{textDecoration: 'none', color: '#576574'}}>
                                    <i className="far fa-trash-alt"></i>
                                  </Link>
                                  </span>
                                </td>
                            </tr>
            </tbody>
        </table>
    </div>
             <div id='mainonebtn'>
                < Link to= 'newproduct' style={{textDecoration: 'none', color: '#fff'}}>
                  <button id='btnnewproduct'>NEW PRODUCT</button>
                </ Link>
             </div>
        </div>
        </React.Fragment>
       )
    }
}

export default Products