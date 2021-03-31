import React from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';

import {  ReactComponent as Logo } from '../../assets/crown.svg';


import './header.styles.scss';


import {auth} from "../../firebase/firebase.util"


const Header = ({currentUser})=>(
    <div className="header">
        <Link to="/">
            <Logo  className='logo'/>
        </Link>

        <div className = 'options'>
            <Link className = 'option' to = "/shop">
                SHOP
            </Link>
            <Link className = 'option' to="/contact">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={()=>auth.signOut()}>
                    Sign Out
                </div>

                :
                <Link className="option" to="/signin">
                    Sign in
                </Link>
            }

        </div>


    </div>
)

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);

