import "regenerator-runtime/runtime";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import shadowRoot from "react-shadow";
import css from "bundle-text:./sdk.css";

let LagRadar: React.ComponentType;
if (process.env.NODE_ENV === "development") {
  // Load the LagRadar component lazily and only in development.
  // We don't want it to load in production.
  LagRadar = React.lazy(() => import("./LagRadar"));
}

// @ts-expect-error PinoutDiagrams does not exist of course.
window.PinoutDiagrams = {
  render: (
    root: ReactDOM.Container,
    { ics, maxWidth }: { ics?: string[]; maxWidth?: string }
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
        {process.env.NODE_ENV === "development" && (
          <Suspense fallback={null}>
            <LagRadar />
          </Suspense>
        )}
      </React.StrictMode>,
      root
    );
  },
};
