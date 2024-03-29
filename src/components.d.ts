/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface VidCom {
    /**
    * Video's autoplay
    */
    'autoplay': boolean;
    /**
    * Whether the video's sound is always disabled and can't be enabled
    */
    'isAlwaysMuted': boolean;
    'mute': () => Promise<void>;
    /**
    * Pauses the video
    */
    'pause': () => Promise<void>;
    /**
    * Plays the video
    */
    'play': () => Promise<void>;
    /**
    * Video's thumbnail
    */
    'poster': string;
    /**
    * Video's URL
    */
    'src': string;
    'unmute': () => Promise<void>;
  }
}

declare global {


  interface HTMLVidComElement extends Components.VidCom, HTMLStencilElement {}
  var HTMLVidComElement: {
    prototype: HTMLVidComElement;
    new (): HTMLVidComElement;
  };
  interface HTMLElementTagNameMap {
    'vid-com': HTMLVidComElement;
  }
}

declare namespace LocalJSX {
  interface VidCom {
    /**
    * Video's autoplay
    */
    'autoplay'?: boolean;
    /**
    * Whether the video's sound is always disabled and can't be enabled
    */
    'isAlwaysMuted'?: boolean;
    /**
    * Video's thumbnail
    */
    'poster'?: string;
    /**
    * Video's URL
    */
    'src'?: string;
  }

  interface IntrinsicElements {
    'vid-com': VidCom;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'vid-com': LocalJSX.VidCom & JSXBase.HTMLAttributes<HTMLVidComElement>;
    }
  }
}


