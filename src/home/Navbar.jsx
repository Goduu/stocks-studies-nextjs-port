import { AppBar, Box, Button, makeStyles, Typography } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        position: 'absolute',
        right: theme.spacing(2),
        zIndex: 5
    },
}))

function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
                <Button>
                    Login

                </Button>
        </div>
    )
}

export default Navbar