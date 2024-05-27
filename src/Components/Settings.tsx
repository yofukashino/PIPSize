import { RadioItem, SliderItem, SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Utils from "../lib/utils";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  return (
    <div>
      <SwitchItem
        note="Save size upon recreation of PIP."
        {...Utils.useSetting(SettingValues, "saveValues", defaultSettings.saveValues)}>
        Save Modifications
      </SwitchItem>
      <SwitchItem
        note="Invert the effect of scroll when using it to change size."
        {...Utils.useSetting(SettingValues, "invertScroll", defaultSettings.invertScroll)}>
        Invert Scrool
      </SwitchItem>
      <SliderItem
        {...Utils.useSetting(SettingValues, "scrollSpeed", defaultSettings.scrollSpeed)}
        note="How much each step of scroll wheel changes the size."
        minValue={0.1}
        maxValue={5}
        onValueRender={(value: number) => `${value.toFixed(3)}x`}>
        Scroll Speed
      </SliderItem>
      <RadioItem
        note="Modifier required to change size on scroll."
        options={[
          { name: "Ctrl", value: "ctrl" },
          { name: "Shift", value: "shift" },
          { name: "Alt", value: "alt" },
          { name: "Ctrl + Shift", value: "ctrl+shift" },
          { name: "Ctrl + Alt", value: "ctrl+alt" },
          { name: "Shift + Alt", value: "shift+alt" },
          { name: "Ctrl + Shift + Alt", value: "ctrl+shift+alt" },
          { name: "None", value: "none" },
        ]}
        {...Utils.useSetting(SettingValues, "modifier", defaultSettings.modifier)}>
        Scroll Modifier
      </RadioItem>
    </div>
  );
};

export default { registerSettings, Settings };
