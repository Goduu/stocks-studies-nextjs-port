import { Button, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image'
import LoginDialog from './login/LoginDialog';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '80vh',
        zIndex: 4,
        padding: theme.spacing(5),
        paddingTop: '-100px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
        position: 'relative'
    },
    button: {
        margin: theme.spacing(2),
        width: '30%'
    }
}))

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant='h2' paragraph>
                UppLevel
            </Typography>
            <Typography variant='h4' paragraph>
                Your next level stock studies tool
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
                Level Up
            </Button>
            <LoginDialog /> 
        </div>
    )
}


export default Header