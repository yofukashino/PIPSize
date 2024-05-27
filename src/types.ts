import { types } from "replugged";
import type util from "replugged/util";

export namespace Types {
  export import DefaultTypes = types;
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export interface PictureInPicture {
    PictureInPictureHeader: DefaultTypes.AnyFunction;
    default: (props: {
      backgroundKey?: string;
      children?: React.ReactElement;
      className?: string;
      hideControls?: boolean;
      idle?: boolean;
      innerClassName?: string;
      onActive: DefaultTypes.AnyFunction;
      onAllowIdle: DefaultTypes.AnyFunction;
      onForceIdle: DefaultTypes.AnyFunction;
      onJumpToChannel: DefaultTypes.AnyFunction;
      onPreventIdle: DefaultTypes.AnyFunction;
      preventIdleComponent: DefaultTypes.AnyFunction;
      renderBottomLeftControls?: () => React.ReactNode;
      renderBottomRightControls?: () => React.ReactNode;
      screenMessage?: string;
      title?: string;
      width?: number;
    }) => React.ReactElement;
  }
  export interface Modules {
    loadModules?: () => Promise<void>;
    PictureInPicture?: PictureInPicture;
  }
  export interface Settings {
    invertScroll: boolean;
    scrollSpeed: number;
    saveValues: boolean;
    value: number;
    modifier: string;
  }
}
export default Types;
