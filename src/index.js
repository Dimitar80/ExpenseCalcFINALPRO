/* FINAL PROJECT - EC finishing*/
import React from 'react'
import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux'
// import store from './redux/store.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import ProLogin from './components/home/ProLogin'
import Register from './components/home/Register'
import Expenses from './components/calculator/Expenses'
import ProductsNew from './components/calculator/ProductsNew'
import NewProduct from './components/newProduct/NewProduct'
import EditProduct from './components/table/EditProduct'
// import TableData from './components/table/TableData'


// HTML
const app = document.getElementById('app')
// console.log('DP')

const Routes = () => {
    return (
          <Router>
           <Switch>
             < Route exact path = '/' component = {ProLogin} />
             < Route exact path = '/register' component = {Register} />
             < Route exact path = '/expenses' render={() => <Expenses component={Navbar}/>} />
             < Route exact path = '/products' render={() => <ProductsNew component={Navbar}/>} />
             < Route exact path = '/newproduct' render={() => <NewProduct component={Navbar}/>} />
             <Route exact path = '/editproduct/:id' render={(props) => <EditProduct {...props} 
             component={Navbar}/>} />
           </Switch>
          </Router>
       )
   }

ReactDOM.render(<Routes />, app)

// ReactDOM.render(
//     <Provider store={store}>
//         <Routes/>
//     </Provider>, app)








