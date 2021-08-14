import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import shadowRoot from "react-shadow";
import css from "bundle-text:./sdk.css";

// @ts-expect-error PinoutDiagrams does not exist of course.
window.PinoutDiagrams = {
  render: (
    root: ReactDOM.Container,
    { ics, maxWidth }: { ics?: []; maxWidth?: string }
  ) => {
    ReactDOM.render(
      <React.StrictMode>
        {React.createElement(
          shadowRoot["div"]!,
          {},
          <style>
            {css}
            {`.wrapper {
             max-width: ${maxWidth !== undefined ? maxWidth : "100%"}
           }`}
          </style>,
          <App ics={Array.isArray(ics) ? ics : []} />
        )}
      </React.StrictMode>,
      root
    );
  },
};
