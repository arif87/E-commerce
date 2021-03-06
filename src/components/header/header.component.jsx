import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import './header.styles.scss';
 

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to='/' className="logo-container"><Logo/></Link>
        <div className="options">
            <Link to='/shop' className="option">Shop</Link>
            <Link to='#' className="option">Contact</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                : <Link to="signin"className="option">Sign In</Link>
            }
            <CartIcon/>
        </div>
        {hidden ? null : 
        <CartDropdown/>}

    </div>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,

})

export default connect(mapStateToProps)(Header);