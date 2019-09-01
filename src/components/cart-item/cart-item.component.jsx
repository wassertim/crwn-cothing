import React from 'react';

import {CartItemContainer, ImageContainer, ItemDetailsContainer} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt="item" />
        <ItemDetailsContainer className="item-details">
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
