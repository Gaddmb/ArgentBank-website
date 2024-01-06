import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// j'impote provider pour connecter mon application React avec mon store
import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* je rend le store redux disponible pour tous les composant  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
