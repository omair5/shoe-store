import React from 'react';
import { Data } from '../../data'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100px",
        margin: "15px auto"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                {Data.map((value, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Paper className={classes.paper}>
                            <img src={value.imageURL} alt="products" style={{ width: "100%", height: "300px" }} />
                            <Typography variant="h6" gutterBottom>{value.name}</Typography>
                            <Typography variant="h6" gutterBottom>{`$${value.price}`}</Typography>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <Link to={`/product/${value.name}`}>
                                        Details
                                    </Link>
                                </Button>
                                <Button size="small" color="primary">Add To Cart</Button>
                            </CardActions>

                        </Paper>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}
