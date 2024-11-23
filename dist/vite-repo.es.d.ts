import { default as default_2 } from 'react';

export declare const Clicker: default_2.FC<ClickerProps>;

declare interface ClickerProps {
    onClick?: () => void;
}

export declare function init(options: MountOptions): {
    unmount: () => void;
};

declare interface MountOptions {
    element: HTMLElement;
}

export { }
