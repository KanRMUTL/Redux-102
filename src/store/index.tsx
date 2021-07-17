import React from "react";
import { createStore, compose } from "redux";
import allReducer from "../reducer";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer, composeEnhancers());

const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
