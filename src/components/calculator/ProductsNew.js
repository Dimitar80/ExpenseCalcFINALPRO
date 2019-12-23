import React from 'react'
import '../../assets/styles/ProductsNew.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'
// import Table from '../table/Table'
import TableNew from '../table/TableNew'


// document.body.style.backgroundColor = 'blue';

class ProductsNew extends React.Component  {
    constructor() {
        super()
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            showEditDelete: true,
            // show: false,
            // edit: false
        }
    }

        //  handleMouseOver(e) {
        //      console.log(e.target, e.target.id, e.pageX)
        //      console.log('hovered')
        //  }
        
        // componentDidMount () {
        //     // this.setState({ loading: true })
        //     // console.log(loading)
        //     axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => {
        //         var c = response.data
        //         // let users = []
        //         console.log(c)
        //                let users = c.map((user) => {
        //                 return (<User      
        //                       key={user.id} 
        //                       id={user.id}
        //                       name={user.name}
        //                       username={user.username}
        //                       email={user.email}
        //                       street={user.address.street}
        //                       suite={user.address.suite}
        //                     //   ex={props.showOrHide}
        //                       del={this.delrow} />
        //                     )
        //                 })
        //                 this.setState({ udata: users })
        //                 // console.log(users)
        //                 console.log(this.state.udata)
        //                 // console.log(this.state.udata.length - 1)
        //                 // console.log(this.state.udata.name)
        //             })
        //     .catch((error) => {
        //         console.log(error + ' Greska')
        //         this.setState({ error: <Error />, loading: false })
        //     })
        // }

        // CldBtn = (e) => {
        //     console.log(e.target.id)
        //     this.setState({ orange: !this.state.orange });
        //     alert("Kliknato")
        // }

        // delBox = (event) => {
        //     this.setState({ show: !this.state.show })
        // }

    
        // closeBt = (event) => {
        //     this.setState({ show: false })
        // }

    render() {
    
         return (
             <React.Fragment>
                         {/* <Navbar /> */}
                         <this.props.component toggle={false}/>
              <div id='products'>
                       {/* PORTAL */}
                       {/* HEADER */}
                   <div className='prmain-container'>
                       {/* Header Title part START */}
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
                         {/* Header Title part END */}
                         {/* Table part START */}
                             <TableNew showEdDel={this.state.showEditDelete} />
                         {/* Table part END */}
                   </div>
                   <div id='mainonebtn'>
                        < Link to = '/newproduct' style={{textDecoration: 'none', color: '#fff'}}>
                            <button id ='btnnewproduct'>NEW PRODUCT</button>
                        </Link>
                   </div>
              </div>
        </React.Fragment>
       )
    }
}

export default ProductsNew