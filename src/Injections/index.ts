import Modules from "../lib/requiredModules";
import injectPictureInPicture from "./PictureInPicture";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectPictureInPicture();
};

export default { applyInjections };
