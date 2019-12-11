/* FINAL PROJECT - EC*/
import React from 'react'
import ReactDOM from 'react-dom'

/*import Menu from './Menu'*/
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import Login from './Login'

// import Wrapper from './Wrapper's
// import Heading from './Heading'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
/*PRO*/
import ProLogin from './components/home/ProLogin'
import Register from './components/home/Register'
import Expenses from './components/calculator/Expenses'
// import Products from './components/calculator/Products'
import ProductsNew from './components/calculator/ProductsNew'
import DeleteBox from './components/calculator/DeleteBox'
import NewProduct from './components/newProduct/NewProduct'

const app = document.getElementById('app')


const Routes = () => {
    return (
          <Router>
              {/* <Menu /> */}
              <Switch>
                  < Route exact path = '/' component = {ProLogin} />
                  < Route exact path = '/register' component = {Register} />
                  < Route exact path = '/expenses' component = {Expenses} />
                  < Route exact path = '/products' component = {ProductsNew} />
                  < Route exact path = '/newproduct' component = {NewProduct} />
                  < Route exact path = '/delbox' component = {DeleteBox} />
             </Switch>
          </Router>
        )
   }

ReactDOM.render(<Routes />, app)


// const Routes = () => {
//     return (
//         <Router>
//             <Menu />
//             <Switch>
//                 <Route exact path='/' component={Home} />
//                 <Route exact path='/about' component={About} />
//                 <Route exact path='/contact' component={Contact} />
//                 <Route exact path='/login' component={Login} />
//                 <Route
//                     exact
//                     path='/user'
//                     render={() =>
//                         <React.Fragment>
//                             <Wrapper>
//                                 <Heading />
                                
//                             </Wrapper>
//                         </React.Fragment>
//                     }
//                 />
//             </Switch>
//         </Router>
//     )
// }
 


