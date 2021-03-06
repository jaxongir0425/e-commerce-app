import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import userStyles from "./styles";

const Product = ({product, onAddToCart}) => {

    const classes = userStyles();

    return (
        <>

            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography
                        dangerouslySetInnerHTML={{__html: product.description}}
                        variant="body2"
                        color="textSecondary"
                    />
                </CardContent>
                <CardActions disableSpacing classes={classes.cardActions} style={{"justify-content": "space-between"}}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>

        </>
    );
}

export default Product;