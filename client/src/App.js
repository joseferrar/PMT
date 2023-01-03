import React from "react";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RouteFC from "./routes/RouteFc";
import store from "./redux/store";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <RouteFC />
      </Provider>
    </>
  );
}

export default App;
