import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import Logo from "../../assets/logoIcon.jpg";
import useStyles from "./style";

const Navbar = () => {

    const classes = useStyles();

    return (
        <>

            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar style={{"justify-content": "space-between"}}>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="Commerce.js" height="30px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

        </>
    );
}

export default Navbar;