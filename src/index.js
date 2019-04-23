/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@material-ui/core";

import configureStore from "./store";
import theme from "./ui/theme/index";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loadind={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <App />
        </React.Fragment>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  /* eslint-disable no-undef */
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
