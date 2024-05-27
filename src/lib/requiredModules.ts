import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async () => {
  Modules.PictureInPicture ??=
    await webpack.waitForProps<Types.PictureInPicture>("PictureInPictureHeader");
};

export default Modules;
