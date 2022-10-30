export interface Style {
    open: string;
    close: string;
    closeRe?: RegExp;
}
export declare const styles: {
    [key: string]: Style;
};
export declare class Colors {
    private str;
    readonly bgBlack: Colors;
    readonly bgBlue: Colors;
    readonly bgCyan: Colors;
    readonly bgGray: Colors;
    readonly bgGreen: Colors;
    readonly bgGrey: Colors;
    readonly bgMagenta: Colors;
    readonly bgRed: Colors;
    readonly bgWhite: Colors;
    readonly bgYellow: Colors;
    readonly black: Colors;
    readonly blue: Colors;
    readonly bold: Colors;
    readonly cyan: Colors;
    readonly dim: Colors;
    readonly gray: Colors;
    readonly green: Colors;
    readonly grey: Colors;
    readonly inverse: Colors;
    readonly italic: Colors;
    readonly magenta: Colors;
    readonly red: Colors;
    readonly strikethrough: Colors;
    readonly underline: Colors;
    readonly yellow: Colors;
    readonly strip: Colors;
    readonly white: Colors;
    styles: {
        [key: string]: Style;
    };
    private enabled;
    private styleKeys;
    constructor(str?: string);
    stylize(style: string): string;
    toString(): string;
    private init();
    private escapeStringRegexp(str);
}
export default function color(str?: string): Colors;
export declare function echo(colorSting: Colors): void;
