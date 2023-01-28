import React from "react";
import allChips from "./chips";
import { Chip } from "./Chip";
import { Settings, SettingsContext } from "./Settings";

export function App({ ics }: { ics: string[] }) {
  const [settings, setSettings] = React.useState<Settings>({
    alignData: true,
    fontSize: 12,
    ics,
  });

  const chips =
    settings.ics.length > 0
      ? allChips.filter((chip) => ics.includes(chip.name))
      : allChips;

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {chips.map((chip) => (
        <Chip
          key={chip.name}
          chip={chip}
          fontSize={settings.fontSize}
          showName={ics.length !== 1}
        />
      ))}
      <div className="wrapper">
        <Settings />
        <hr />
        <Disclaimer />
      </div>
    </SettingsContext.Provider>
  );
}

function Disclaimer() {
  return (
    <p>
      Disclaimer: These unofficial pinout diagrams were created manually based on the original datasheets. Since this was a manual process, there may be errors in the diagrams. The diagrams come with absolutely no warranty of any kind. Please{" "}
      <a href="https://github.com/cmfcmf/ic-pinout-diagram-generator/issues/new">
        report errors here
      </a>{" "}
      if you find any.
      <br />
      <small>
        Pinout diagram generator made by{" "}
        <a href="https://github.com/cmfcmf">Christian Flach (@cmfcmf)</a>. The
        source code can be found at GitHub:{" "}
        <a href="https://github.com/cmfcmf/ic-pinout-diagram-generator">
          cmfcmf/ic-pinout-diagram-generator
        </a>
        .
      </small>
    </p>
  );
}
