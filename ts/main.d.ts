import type { ReactNode } from "react";

export {};

declare global {
    type T_SVG = SVGAtrributes<SVGElement>;
    type T_LayoutProps = Readonly<{children:ReactNode}>;
    type Optional<T, K extends keyof T> = Omit<T,K> & Partial<Pick<T,K>>;
    type T_Theme = 'dark'| 'light';
    type T_Direction = 'left'|'right'|'down'|'up';
    type T_Url = `https://${string}` | `http://${string}`;
    type T_ImageBase = {
        blurDataURL?:string;
        alt:string;
        src:string;
        srcSet?:string;
        sizes?:string;
        height?:number;
        width?:number;
        title?:string;
    }
}