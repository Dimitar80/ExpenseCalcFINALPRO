import React from 'react'
import '../../assets/styles/Navbar.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
     constructor(props){
        super(props)
        this.state = {
             active: null,
             orange: true,
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
          this.setState({ orange: !this.state.orange });   
        } else {
          this.setState({active : position})
        }
      }
      
      myColor = (position) => {
        // var style = {
        //       backgroundColor: 'red',
        //       color: 'green'
        // }
        if (this.state.active === position) {
          return  'red'/*(this.state.style)*/
        }
        return "";
      }

      
        // var _style;
        // if (this.state.onClicked) { // clicked button style
        //     _style = {
        //         backgroundColor: "red"
        //     }
        // }
        // else { // default button style
        //     _style = {
        //         backgroundColor: "blue"
        //     }
        // }


    render() {

        // let btn_class = this.state.orange ? "orangeButton" : "whiteButton";

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
                   <button /*id='btproducts' style={{color: this.myColor(0)}}*/ onClick={() => {this.toggle(0)}}
                   className={this.state.orange ? "orangeButton" : "whiteButton"}
                   /*className={btn_class}*/  >
                       PRODUCTS
                   </button>
               </Link>
       
               < Link to='expenses'>
                   <button /*id='btexpenses'  style={{color: this.myColor(1)}}*/ onClick={() => {this.toggle(1)}}
                   className={!this.state.orange ? "orangeButton" : "whiteButton"} >
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

