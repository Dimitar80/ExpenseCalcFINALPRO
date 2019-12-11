import React from 'react'
import '../../assets/styles/ProLogin.css'
import '../../assets/styles/shared.css'
import { Link } from 'react-router-dom'

class ProLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showProducts: true,
            // showAlert: false,
            // didUpdate: false
            orange: true,
        }
    }

    render () {
    return (
        <React.Fragment>
            <div id='prologin'>
                <div className='box-container'>
                    <form>
                       <p className='input-container'>
                           <label className="text-field-input" >E-mail</label>
                           <input type="text" className="text-field" placeholder='Korekcii - Finishing'/>
                       </p>
                       <p className='input-container'>
                           <label className="text-field-input" >Password</label>
                           <input type="text" className="text-field" />
                       </p>
                           < Link to='expenses' style={{textDecoration: 'none', color: '#fff'}}>
                           <button className='primary-button'>SIGN IN</button>
                           </Link>
                    </form>
                </div>
                <div className='additional-info'>
                        <p> Or if you don't have an account,
                           <Link to='register' activestyle={{color: 'red'}} 
                                 style={{textDecoration: 'none', color:'#8d8d8d', fontWeight: 700}}> 
                                 &nbsp;
                                 Register.
                           </Link>
                        </p>
                </div>
            </div>
            </React.Fragment>
           )
        }
    }

export default ProLogin