import React, { Fragment, useState } from 'react';
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

export default function SignUp(props) {
    const classes = useTheme()
    const { open, handleClose, login } = props
    const { form, handleMouseDownPassword, handleClickShowPassword, handleChange,
        handleTermOfServicesOpen } = props

    return (
        <div>
            <Dialog
                className={classes.dialog}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-slide-title">{"Sign Up"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">

                    </DialogContentText>
                    <Fragment >
                        <div className={classes.user}>
                            <TextField
                                value={form.email}
                                onChange={(e) => handleChange('email', e)}
                                fullWidth
                                type='email'
                                variant='outlined'
                                label='E-mail'
                            />
                        </div>
                        <div className={classes.password}>
                            <TextField
                                label='Password'
                                type={form.showPass ? "text" : "password"}
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
                                                {form.showPass ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.password}>
                            <TextField
                                label='Repeat Password'
                                type={form.showPass ? "text" : "password"}
                                value={form.passConfirm}
                                variant="outlined"
                                onChange={(e) => handleChange('passConfirm', e)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {form.showPass ? <Visibility /> : <VisibilityOff />}
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
                                value={form.acceptTerms}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /> I agree to the {" "}
                            <Link onClick={handleTermOfServicesOpen}>
                                terms of service
                            </Link>
                        </div>
                    </Fragment>
                    <Box className={classes.actionButton}>

                        <Button variant="contained" color="secondary" fullWidth>
                            Sign Up
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>

                    <Box className={classes.forgotPassword}>

                        <Typography variant='body2' align='center'>
                            Already have an account?{" "}
                            <Link onClick={login}>
                                Login
                            </Link>
                        </Typography>
                    </Box>

                </DialogActions>

            </Dialog>

        </div>
    );
}

SignUp.propTypes = {
    form: PropTypes.object.isRequired,
    handleMouseDownPassword: PropTypes.func.isRequired,
    handleClickShowPassword: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleTermOfServicesOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};