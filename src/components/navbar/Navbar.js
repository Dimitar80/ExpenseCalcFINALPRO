import React from 'react'
import '../../assets/styles/Navbar.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

// Navbar 'sreden'
class Navbar extends React.Component {
     constructor(props){
        super(props)
        this.state = {
             active: null,
            //  toggle: true,
             toggle: this.props.toggle
    
        }
    }
    
      
      showProducts = () => {
        // alert("Products WORKS!")
        this.setState({
            toggle: false
        })
    }

      showExpenses = () => {
        // alert("Expenses WORKS!")
        this.setState({
            toggle: true
        })
    }

      
     render() {


        return(
            <React.Fragment>
          {/* <header id='header'> */}
          <div id='header'>
               <nav id='mainnav'>
               < Link to= '/' >
                   <button id='bthome' >
                       HOME
                   </button>
               </Link>  

               < Link to='/products'  /*exact activeClassName="navbar-button active"*/>
                   <button /*id='btproducts'*/ onClick={this.showProducts}
                   className={!this.state.toggle ? "navbar-button active" : "navbar-button"}>
                       PRODUCTS
                   </button>
               </Link>
       
               < Link to='/expenses' /*exact activeClassName="navbar-button active"*/>
                   <button /*id='btexpenses'*/ onClick={this.showExpenses}
                   className={this.state.toggle ? "navbar-button active" : "navbar-button"}
                   /*activeClassName="navbar-button active"*/ >
                       EXPENSES
                   </button>
               </Link>
               </nav>
               <div className="user">
                   <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
                   <h2>User name</h2>
               </div>
               </div>
           {/* </header> */}
           </React.Fragment>
        )
    }
}

export default Navbar

