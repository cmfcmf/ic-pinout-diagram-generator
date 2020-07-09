import React, { useContext } from "react";

export const SettingsContext = React.createContext();

export function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);
  return <>
    <h2>Display Settings</h2>
    <label>
      Align data
      <input type="checkbox" value="1" checked={settings.alignData}
        onChange={(evt) => {
          const alignData = evt.target.checked;
          return setSettings(settings => ({ ...settings, alignData }));
        }} />
    </label>
    <br />
    <label>
      Font size{" "}
      <input type="number" value={settings.fontSize}
        onChange={(evt) => {
          const fontSize = parseInt(evt.target.value);
          return setSettings(settings => ({ ...settings, fontSize }));
        }} />
    </label>
  </>;
}
