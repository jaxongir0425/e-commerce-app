import React from "react";
import {Typography} from "@material-ui/core";
import {Elements} from "@stripe/react-stripe-js";
import {loadStrip} from "@stripe/stripe-js";

import Review from "./Review";

const PaymentForm = ({shippingData}) => {
    return (
        <>

            <Review/>

        </>
    )
};

export default PaymentForm;