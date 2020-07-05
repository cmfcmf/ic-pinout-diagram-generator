import React from 'react';
import './App.css';
import chips from "./chips";
import { Chip } from "./Chip";
import { Settings, SettingsContext } from "./Settings";


function App() {
  const [settings, setSettings] = React.useState({
    alignData: true
  });

  const ctx = {
    settings,
    setSettings
  };

  return (
    <SettingsContext.Provider value={ctx}>
      <Settings />
      {chips.map((chip, i) => <Chip key={i} chip={chip} />)}
    </SettingsContext.Provider>
  );
}

export default App;
