import React from 'react';
import assist from '../../IMG/paymentIcons/assist.png';
import belcart from '../../IMG/paymentIcons/belcart.png';
import mastercard from '../../IMG/paymentIcons/mastercard.png';
import mir from '../../IMG/paymentIcons/mir.png';
import sber from '../../IMG/paymentIcons/sber.png';
import visa from '../../IMG/paymentIcons/visa.png';

export default function PaymentIcons() {
    return (
        <>
            <img src={assist} style={{ "backgroundColor": "white", width: "80px" }} alt="payment-icon" />
            <img src={belcart} alt="payment-icon" />
            <img src={mastercard} style={{ width: "50px" }} alt="payment-icon" />
            <img src={mir} style={{ "backgroundColor": "white" }} alt="payment-icon" />
            <img src={sber} alt="payment-icon" />
            <img src={visa} style={{ width: "40px" }} alt="payment-icon" />
        </>
    )
}
