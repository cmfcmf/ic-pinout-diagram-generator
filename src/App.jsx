import React from 'react';
import './App.css';
import chips from "./chips";
import { Chip } from "./Chip";
import { Settings, SettingsContext } from "./Settings";


function App() {
  const [settings, setSettings] = React.useState({
    alignData: true,
    fontSize: 12,
    chips: chips
  });

  const ctx = {
    settings,
    setSettings
  };

  return (
    <SettingsContext.Provider value={ctx}>
      <h1>IC Pinout Diagram Generator</h1>
      <Settings />
      {settings.chips.map((chip, i) => <Chip key={i} chip={chip} />)}
    </SettingsContext.Provider>
  );
}

export default App;
