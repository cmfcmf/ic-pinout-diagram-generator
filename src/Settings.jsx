import React, { useContext } from "react";

export const SettingsContext = React.createContext();

export function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);
  return <>
    <h1>Settings</h1>
    <label>
      <input type="checkbox" value="1" checked={settings.alignData}
        onChange={(evt) => {
          const alignData = evt.target.checked;
          return setSettings(settings => ({ ...settings, alignData }));
        }} />
      Align data
    </label>
  </>;
}