import "./demo.css";
import "./sdk.min";

// @ts-expect-error PinoutDiagrams does not exist on window
window.PinoutDiagrams.render(document.getElementById("root"), {
  ics: [],
  maxWidth: undefined,
});
