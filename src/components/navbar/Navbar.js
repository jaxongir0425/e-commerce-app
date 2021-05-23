import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import Logo from "../../assets/logo.jpg";
import useStyles from "./styles";
import {Link, useLocation} from "react-router-dom";

const Navbar = ({totalItems}) => {

    const classes = useStyles();
    const location = useLocation();

    return (
        <>

            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar style={{"justify-content": "space-between"}}>
                    <Typography component={Link} to="/" variant="h6" style={{"text-decoration": "none"}}
                                className={classes.title} color="inherit">
                        <img src={Logo} alt="Commerce.js" height="20px" className={classes.image}/> Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {
                        location.pathname === "/" && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" aria-label="Show cart items"
                                            color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart/>
                                    </Badge>
                                </IconButton>
                            </div>
                        )
                    }
                </Toolbar>
            </AppBar>

        </>
    );
}

export default Navbar;