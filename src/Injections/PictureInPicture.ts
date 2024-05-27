import { React } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
export default (): void => {
  PluginInjector.after(Modules.PictureInPicture, "default", ([{ width }], res) => {
    const [size, setSize] = React.useState(
      SettingValues.get("saveValues", defaultSettings.saveValues)
        ? SettingValues.get("value", defaultSettings.value) ?? width
        : width,
    );
    React.useEffect(() => {
      if (SettingValues.get("saveValues", defaultSettings.saveValues))
        SettingValues.set("value", size);
    }, [size]);
    res.props.onWheel = (e) => {
      if (!Utils.checkForModifier(SettingValues.get("modifier", defaultSettings.modifier), e))
        return;
      e.stopPropagation();
      const val =
        size +
        (e.deltaY / 100) *
          (SettingValues.get("invertScroll", defaultSettings.invertScroll) ? -1 : 1) *
          SettingValues.get("scrollSpeed", defaultSettings.scrollSpeed);
      setSize(val < 320 ? 320 : val > 1080 ? 1080 : val);
    };
    res.props.style = { width: size, height: size * (9 / 16) };
    return res;
  });
};
