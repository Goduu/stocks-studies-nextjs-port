import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({    
    title: {
        fontSize: 14,
    },
    content: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),

    }
}));



function MainCardTemplate(props) {
    const classes = useStyles();
    const {name, ticker, price, industry} = props

    return (
        <Paper >
            <div className={classes.content}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {ticker}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {price}
                </Typography>
                <Typography variant="body2" component="p">
                    {industry}
                </Typography>

                <div className={classes.button}>
                    <Button size="small" >Learn More</Button>
                </div>
            </div>
        </Paper>
    );


}

export { MainCardTemplate }
