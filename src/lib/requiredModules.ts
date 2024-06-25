import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async () => {
  Modules.PictureInPicture ??= await webpack
    .waitForModule<Types.PictureInPicture>(webpack.filters.bySource(".pictureInPictureVideo"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find PictureInPicture Module");
    });
};

export default Modules;
