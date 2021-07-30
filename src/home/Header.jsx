import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '80vh',
        zIndex: 4,
        padding: theme.spacing(5),
        left: theme.spacing(10),
        paddingTop: '-100px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper
    },
}))

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant='h2'>
                Nextit
            </Typography>
            <Typography variant='h4'>
                Your next level stock studies tool.
            </Typography>
        </div>
    )
}

export default Header