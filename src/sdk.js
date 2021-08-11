import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import shadowRoot from "react-shadow";
import css from "!!raw-loader!./sdk.css";

window.PinoutDiagrams = {
  render: (root, { ics, maxWidth }) => {
    ReactDOM.render(
      <React.StrictMode>
        <shadowRoot.div>
          <style>
            {css}
            {`.wrapper {
              max-width: ${maxWidth !== undefined ? maxWidth : "100%"}
            }`}
          </style>
          <App ics={Array.isArray(ics) ? ics : []} />
        </shadowRoot.div>
      </React.StrictMode>,
      root
    );
  },
};
