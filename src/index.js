import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import "alertifyjs/build/css/alertify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import configureStore from "./redux/reducer/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
