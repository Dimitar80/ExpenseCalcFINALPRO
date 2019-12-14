import React from 'react'
import '../../assets/styles/Navbar.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
     constructor(props){
        super(props)
        this.state = {
             active: null,
             toggle: true,
             btn: 'orangeButton'
        }
    }




    // toggle = (position) => {
    //     if (this.state.active === position && this.state.orange) {
    //       this.setState({active : null})
    //     //   let btn_class = this.state.orange ? "orangeButton" : "whiteButton"
          
    //     } else {
    //       this.setState({active : position})
    //     }
    //   }

    toggle = (position) => {
        if (this.state.active === position) {
          this.setState({active : null}) 
          this.setState({ toggle: false });   
        } else {
          this.setState({active : position})
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
            // <React.Fragment>
           <header id='header'>
               <nav id='mainnav'>
               < Link to= '/' >
                   <button id='bthome' >
                       HOME
                   </button>
               </Link>  

               < Link to='products'>
                   <button /*id='btproducts'*/ onClick={this.showProducts}
                   className={!this.state.toggle ? "navbar-button active" : "navbar-button"}
                   /*className={btn_class}*/  >
                       PRODUCTS
                   </button>
               </Link>
       
               < Link to='expenses'>
                   <button /*id='btexpenses'*/ onClick={this.showExpenses}
                   className={this.state.toggle ? "navbar-button active" : "navbar-button"} >
                       EXPENSES
                   </button>
               </Link>
               </nav>
               <div className="user">
                   <img src="../../assets/img/DPPHOTO.jpg" alt="profileimg" />
                   <h2>User name</h2>
               </div>
           </header>
           // </React.Fragment>
        )
    }
}

export default Navbar

