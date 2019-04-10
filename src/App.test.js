import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";

import configureStore from "./store";
import theme from "./ui/theme/index";
import "./index.css";
import App from "./App";

const { store, persistor } = configureStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loadind={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
