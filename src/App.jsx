import React from 'react';
import './App.css';
import definedChips from "./chips";
import { Chip } from "./Chip";
import { Settings, SettingsContext } from "./Settings";
import queryString from 'query-string';


function App() {
  const [settings, setSettings] = React.useState({
    alignData: true,
    fontSize: 12,
    chips: definedChips,
    selectedChip: null,
    embed: false,
  });

  const ctx = {
    settings,
    setSettings
  };

  React.useEffect(() => {
    const { ic, variant, embed } = queryString.parse(window.location.search);
    let selectedChip = {};
    if (ic) {
      selectedChip.ic = ic;
    }
    if (variant) {
      selectedChip.variant = variant;
    }
    if (!ic && !variant) {
      selectedChip = null;
    }

    setSettings(settings => ({...settings, selectedChip, embed: embed === '1' }));
  }, [settings.chips]);

  let chips = settings.chips;
  if (settings.selectedChip?.ic) {
    chips = chips.filter(chip => chip.name === settings.selectedChip?.ic);
  }

  return (
    <SettingsContext.Provider value={ctx}>
      {!settings.embed && <h1>IC Pinout Diagram Generator</h1>}
      <Settings />
      {chips.map((chip, i) => <Chip key={i} chip={chip} />)}
    </SettingsContext.Provider>
  );
}

export default App;
