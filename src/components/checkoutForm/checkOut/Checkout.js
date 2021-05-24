import React, {useEffect, useState} from "react";
import {Paper, Step, StepLabel, Stepper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import {commerce} from "../../../library/commerce";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({cart}) => {

    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();

    useEffect(async () => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

                setCheckoutToken(token);
            } catch (error) {

            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);

        nextStep();
    };

    const Confirmation = () => {
        return (
            <>
                <h1>Confirmation</h1>
            </>
        );
    };

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData}/>

    return (
        <>

            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper} style={{"background-color": "#e7e8f1"}}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {
                            steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
                </Paper>
            </main>

        </>
    )
};

export default Checkout;