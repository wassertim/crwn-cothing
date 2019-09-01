import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_eUPb2Izkcf2XGnH5smvHkMWY00TYODllIC";

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull');
    };
    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Yor total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
