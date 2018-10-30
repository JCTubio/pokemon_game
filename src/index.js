import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./components/app";
import * as serviceWorker from "./serviceWorker";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import reducers from "./store/reducers";

const store = Redux.createStore(reducers);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <AppContainer />
  </ReactRedux.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
