import { React } from 'react';
import { Paper, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginTop: theme.spacing(2) + 5,
        padding: theme.spacing(1),
    },
}))
function StatisticExample(props) {
    const { name, value } = props
    const classes = useStyles()

    return (
        <Paper  className={classes.root}>
            <div  >
                <Typography variant="h5"
                >
                    <b>
                        {value}
                    </b>
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                    {name}
                </Typography>

            </div>
        </Paper>
    );
}


export default StatisticExample