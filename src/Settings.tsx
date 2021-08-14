import React, { useContext } from "react";

export type Settings = {
  alignData: boolean;
  fontSize: number;
  ics: string[];
};

export const SettingsContext = React.createContext<{
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
}>({
  settings: {
    alignData: true,
    fontSize: 12,
    ics: [],
  },
  setSettings: () => {},
});

export function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);
  return (
    <>
      <h2>Display Settings</h2>
      <label>
        Align data
        <input
          type="checkbox"
          value="1"
          checked={settings.alignData}
          onChange={(evt) => {
            const alignData = evt.target.checked;
            return setSettings((settings) => ({ ...settings, alignData }));
          }}
        />
      </label>
      <br />
      <label>
        Font size{" "}
        <input
          type="number"
          value={settings.fontSize}
          onChange={(evt) => {
            const fontSize = parseInt(evt.target.value);
            return setSettings((settings) => ({ ...settings, fontSize }));
          }}
        />
      </label>
    </>
  );
}
