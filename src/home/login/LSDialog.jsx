import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { Box, Checkbox, IconButton, Input, InputAdornment, TextField, makeStyles, Typography, Link } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Login from './Login';
import SingUp from './SignUp';
import TermsOfService from './TermsOfService';
import axios from 'axios';
import { useAppContext } from '../../context/state';
import { useRouter } from 'next/router';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useTheme = makeStyles(theme => ({
    openButton: {
        padding: theme.spacing(2),
        position: 'absolute',
        right: theme.spacing(2),
        zIndex: 5,
        top: theme.spacing(1)
    }
}))

export default function LSDialog() {
    const classes = useTheme()
    const [loginOpen, setLoginOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '', passShow: true, });
    const [signupForm, setSignupForm] = useState({ email: '', password: '', passConfirm: '', acceptTerms: false, passShow: true });
    const [termOfServicesOpen, setTermsOfServicesOpen] = useState(false);
    const router = useRouter()
    const states = useAppContext()
    const apiUrl = states.apiUrl

    const loginRequest = () => {
        const headers = { headers: { 'Content-Type': 'application/json' } }
        console.log(loginForm)
        return new Promise((resolve, reject) => {
            console.log("-", states)
            axios.post(apiUrl + 'user/login', loginForm, headers)
                .then(res => {
                    states.auth.token = res.data.authToken
                    states.auth.name = res.data.name
                    states.auth.email = res.data.email
                    states.auth.avatar = res.data.avatar
                    states.auth.roles = res.data.roles
                    router.push('/in/Grid')
                })
                .catch(e => {
                    reject(e)
                })
        });
    }

    const handleClickOpen = () => {
        setLoginOpen(true);
    };

    const handleOpenSignUp = () => {
        setLoginOpen(false)
        setSignUpOpen(true)
    }
    const handleOpenLogin = () => {
        setLoginOpen(true)
        setSignUpOpen(false)
    }
    const handleClose = () => {
        setLoginOpen(false)
        setSignUpOpen(false)
    }

    const loginHandleClose = () => {
        setLoginOpen(false);
    };
    const loginHandleMouseDownPassword = () => {
    };
    const loginHandleClickShowPassword = () => {
        setLoginForm(prev => {
            return {
                email: prev.email, password: prev.password, showPass: !prev.passShow,
            }
        });
    };
    const loginHandleChange = (type, e) => {
        setLoginForm(prev => {
            const temp = { ...prev }
            temp[type] = e.target.value
            return temp
        }
        )
    }

    const singupHandleMouseDownPassword = () => {
    };
    const singupHandleClickShowPassword = () => {
        setSignupForm(prev => {
            const temp = { ...prev }
            temp.showPass = !temp.showPass
            return temp
        });
    };
    const singupHandleChange = (type, e) => {
        setSignupForm(prev => {
            const temp = { ...prev }
            temp[type] = e.target.value
            return temp
        }
        )
    }
    const singupHandleTermOfServicesClose = () => {
        setTermsOfServicesOpen(false)
    }
    const singupHandleTermOfServicesOpen = () => {
        setTermsOfServicesOpen(true)
    }

    return (
        <div className={classes.openButton}>
            <Button onClick={handleClickOpen}>
                Login
            </Button>
            <Login
                open={loginOpen}
                form={loginForm}
                signUp={handleOpenSignUp}
                handleClose={loginHandleClose}
                handleMouseDownPassword={loginHandleMouseDownPassword}
                handleClickShowPassword={loginHandleClickShowPassword}
                handleChange={loginHandleChange}
                loginRequest={loginRequest}
            />
            <SingUp
                open={signUpOpen}
                form={signupForm}
                login={handleOpenLogin}
                handleClose={handleClose}
                handleMouseDownPassword={singupHandleMouseDownPassword}
                handleClickShowPassword={singupHandleClickShowPassword}
                handleChange={singupHandleChange}
                handleTermOfServicesOpen={singupHandleTermOfServicesOpen}
            />
            <TermsOfService open={termOfServicesOpen} onClose={singupHandleTermOfServicesClose} />

        </div>
    );
}