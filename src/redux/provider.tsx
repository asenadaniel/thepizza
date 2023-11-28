"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate loading={"loading"} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}

export default ReduxProvider;
