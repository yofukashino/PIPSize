import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("PIPSize", "#b380ff");
export const SettingValues = await settings.init("dev.yofukashino.PIPSize", defaultSettings);
import Settings from "./Components/Settings";
import Injections from "./Injections/index";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings.jsx";
