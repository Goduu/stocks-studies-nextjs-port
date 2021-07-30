import React, { Fragment, Suspense, lazy } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../theme";
import GlobalStyles from "../GlobalStyles";
// import Pace from "./shared/components/Pace";
import NotificationBar from '../shared/components/NotificationBar'
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistedStore } from '../shared/redux/store/store'

export default function App({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={3}>
                        <CssBaseline />
                        <GlobalStyles />
                        <NotificationBar />
                        <Suspense fallback={<Fragment />}>
                            <Component {...pageProps} />
                        </Suspense>
                    </SnackbarProvider>
                </ThemeProvider >
            </PersistGate>
        </Provider>
    )
}