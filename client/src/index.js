import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./store/index";

import { Provider } from "react-redux";

import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

let persistConfig = {
  key: "root",
  storage: storage,
};

let persistedReducer = persistReducer(persistConfig, authSlice.reducer);

let store = configureStore({
  reducer: { auth: persistedReducer },
});

let persistedstore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedstore}>
      <App />
    </PersistGate>
  </Provider>,
);
