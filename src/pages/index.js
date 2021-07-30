import React from "react";
import ReactDOM from "react-dom";
import HomeTest from "../logged_out/components/HomeTest";
// import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import '../shared/i18n/i18n';
import theme from "../theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// const preloadedState = window.__PRELOADED_STATE__
// const store = configureStore(preloadedState)

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <HomeTest />
    </ThemeProvider>
  )

}



// serviceWorkerRegistration.register();
