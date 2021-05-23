import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import userStyles from "./style";

const Product = ({product}) => {

    const classes = userStyles();

    return (
        <>

            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing classes={classes.cardActions}  style={{"justify-content": "space-between"}}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>

        </>
    );
}

export default Product;