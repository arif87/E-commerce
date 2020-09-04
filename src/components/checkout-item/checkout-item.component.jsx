import React from 'react';
import {connect} from 'react-redux';
import { removeItem, decreaseItem, addItem, } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem, }) => {
    const { imageUrl, name, quantity, price, } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
    addItem: item => dispatch(addItem(item)),

});


export default connect(null, mapDispatchToProps)(CheckoutItem);