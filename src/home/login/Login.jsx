import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Box, Checkbox, IconButton, Input, InputAdornment, TextField, makeStyles, Typography, Link } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useTheme = makeStyles(theme => ({
    dialog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    user: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
    password: {
        marginTop: theme.spacing(2)
    },
    actionButton: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    forgotPassword: {
        alignItems: "center",
        width: '100%',
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}))

export default function Login(props) {
    const classes = useTheme()
    const {
        open,
        form,
        signUp,
        handleClose,
        handleMouseDownPassword,
        handleClickShowPassword,
        handleChange } = props


    return (
        <div>
            <Dialog
                className={classes.dialog}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                    <Fragment >
                        <div className={classes.user}>
                            <TextField fullWidth type='email' variant='outlined' label='E-mail' />
                        </div>
                        <div className={classes.password}>
                            <TextField
                                label='Password'
                                type={form.passShow ? "text" : "password"}
                                value={form.password}
                                variant="outlined"
                                onChange={(e) => handleChange('password', e)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {form.passShow ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> Remember me
                        </div>
                    </Fragment>
                    <Box className={classes.actionButton}>

                        <Button variant="contained" color="secondary" fullWidth>
                            Login
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>

                    <Box className={classes.forgotPassword}>
                        <Typography variant='body2' align='center'>
                            <Link >
                                Forgot password?
                            </Link >
                        </Typography>
                        <Typography variant='body2' align='center'>
                            Dont have an account?{" "}
                            <Link onClick={signUp}>
                                Sing up
                            </Link>
                        </Typography>
                    </Box>

                </DialogActions>

            </Dialog>
        </div>
    );
}

Login.propTypes = {
    form: PropTypes.object.isRequired,
    handleMouseDownPassword: PropTypes.func.isRequired,
    handleClickShowPassword: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    signUp: PropTypes.func.isRequired,
};

