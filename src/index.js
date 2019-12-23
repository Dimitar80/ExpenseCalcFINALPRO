/* FINAL PROJECT - EC finishing*/
import React from 'react'
import ReactDOM from 'react-dom'



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
/*PRO*/
import ProLogin from './components/home/ProLogin'
import Register from './components/home/Register'
import Expenses from './components/calculator/Expenses'
import ProductNew from './components/calculator/ProductsNew'
import EditProduct from './components/calculator/EditProduct'
import NewProduct from './components/newProduct/NewProduct'
import Navbar from './components/navbar/Navbar'


const app = document.getElementById('app')
// console.log('DP')

const Routes = () => {
    return (
          <Router>
              <Switch>
                  < Route exact path = '/' component = {ProLogin} />
                  < Route exact path = '/register' component = {Register} />
                  < Route exact path = '/expenses' render={() => <Expenses component={Navbar}/>} />
                  < Route exact path = '/products' render={() => <ProductNew component={Navbar}/>} />
                  < Route exact path = '/newproduct' render={() => <NewProduct component={Navbar}/>} />
                  < Route exact path = '/editproduct'  render={() => <EditProduct component={Navbar}/>} />
             </Switch>
          </Router>
        )
   }

ReactDOM.render(<Routes />, app)


// const Routes = () => {
//     return (
//           <Router>
//               <Switch>
//                   < Route exact path = '/' component = {ProLogin} />
//                   < Route exact path = '/register' component = {Register} />
//                   < Route exact path = '/expenses' component = {Expenses} />
//                   < Route exact path = '/products' component = {ProductsNew} />
//                   < Route exact path = '/newproduct' component = {NewProduct} />
//                   {/* < Route exact path = '/editproduct' component = {EditProduct} /> */}
//              </Switch>
//           </Router>
//         )
//    }





