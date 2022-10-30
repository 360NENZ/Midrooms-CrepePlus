"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

 The MIT License (MIT)

 Original Library
 - Copyright (c) Marak Squires
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

 Additional Functionality
 - Copyright (c) Shadrack Ndacayisenga <shaselloiel@gmail.com> (shaselekings.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
const system_1 = require("./system");
exports.styles = {
    bgBlack: { open: "\u001b[40m", close: "\u001b[49m" },
    bgBlue: { open: "\u001b[44m", close: "\u001b[49m" },
    bgCyan: { open: "\u001b[46m", close: "\u001b[49m" },
    bgGray: { open: "\u001b[90m", close: "\u001b[49m" },
    bgGreen: { open: "\u001b[42m", close: "\u001b[49m" },
    bgGrey: { open: "\u001b[90m", close: "\u001b[49m" },
    bgMagenta: { open: "\u001b[45m", close: "\u001b[49m" },
    bgRed: { open: "\u001b[41m", close: "\u001b[49m" },
    bgWhite: { open: "\u001b[47m", close: "\u001b[49m" },
    bgYellow: { open: "\u001b[43m", close: "\u001b[49m" },
    black: { open: "\u001b[30m", close: "\u001b[39m" },
    blue: { open: "\u001b[34m", close: "\u001b[39m" },
    bold: { open: "\u001b[1m", close: "\u001b[22m" },
    cyan: { open: "\u001b[36m", close: "\u001b[39m" },
    dim: { open: "\u001b[2m", close: "\u001b[22m" },
    gray: { open: "\u001b[90m", close: "\u001b[39m" },
    green: { open: "\u001b[32m", close: "\u001b[39m" },
    grey: { open: "\u001b[90m", close: "\u001b[39m" },
    hidden: { open: "\u001b[8m", close: "\u001b[28m" },
    inverse: { open: "\u001b[7m", close: "\u001b[27m" },
    italic: { open: "\u001b[3m", close: "\u001b[23m" },
    magenta: { open: "\u001b[35m", close: "\u001b[39m" },
    red: { open: "\u001b[31m", close: "\u001b[39m" },
    reset: { open: "\u001b[0m", close: "\u001b[0m" },
    strikethrough: { open: "\u001b[9m", close: "\u001b[29m" },
    underline: { open: "\u001b[4m", close: "\u001b[24m" },
    white: { open: "\u001b[37m", close: "\u001b[39m" },
    yellow: { open: "\u001b[33m", close: "\u001b[39m" },
};
class Colors {
    constructor(str = "") {
        this.str = str;
        this.styles = exports.styles;
        this.init();
    }
    get bgBlack() {
        this.stylize("bgBlack");
        return this;
    }
    get bgBlue() {
        this.stylize("bgBlue");
        return this;
    }
    get bgCyan() {
        this.stylize("bgCyan");
        return this;
    }
    get bgGray() {
        this.stylize("bgGray");
        return this;
    }
    get bgGreen() {
        this.stylize("bgGreen");
        return this;
    }
    get bgGrey() {
        this.stylize("bgGrey");
        return this;
    }
    get bgMagenta() {
        this.stylize("bgMagenta");
        return this;
    }
    get bgRed() {
        this.stylize("bgRed");
        return this;
    }
    get bgWhite() {
        this.stylize("bgWhite");
        return this;
    }
    get bgYellow() {
        this.stylize("bgYellow");
        return this;
    }
    get black() {
        this.stylize("black");
        return this;
    }
    get blue() {
        this.stylize("blue");
        return this;
    }
    get bold() {
        this.stylize("bold");
        return this;
    }
    get cyan() {
        this.stylize("cyan");
        return this;
    }
    get dim() {
        this.stylize("dim");
        return this;
    }
    get gray() {
        this.stylize("gray");
        return this;
    }
    get green() {
        this.stylize("green");
        return this;
    }
    get grey() {
        this.stylize("grey");
        return this;
    }
    get inverse() {
        this.stylize("inverse");
        return this;
    }
    get italic() {
        this.stylize("italic");
        return this;
    }
    get magenta() {
        this.stylize("magenta");
        return this;
    }
    get red() {
        this.stylize("red");
        return this;
    }
    get strikethrough() {
        this.stylize("strikethrough");
        return this;
    }
    get underline() {
        this.stylize("underline");
        return this;
    }
    get yellow() {
        this.stylize("yellow");
        return this;
    }
    get strip() {
        this.str = (`${this.str}`).replace(/\x1B\[\d+m/g, "");
        return this;
    }
    get white() {
        this.stylize("white");
        return this;
    }
    stylize(style) {
        const code = this.styles[style];
        if (this.enabled) {
            this.str = code.open + this.str.replace(code.closeRe, code.open) + code.close;
        }
        return this.str;
    }
    toString() {
        return this.str;
    }
    init() {
        this.enabled = system_1.System.colorSupported();
        this.styleKeys = Object.keys(this.styles);
        this.styleKeys.forEach((key) => {
            this.styles[key].closeRe = new RegExp(this.escapeStringRegexp(this.styles[key].close), "g");
        });
    }
    // noinspection JSMethodCanBeStatic
    escapeStringRegexp(str) {
        if (typeof str !== "string") {
            throw new TypeError("Expected a string.");
        }
        return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    }
}
exports.Colors = Colors;
function color(str) {
    return (new Colors(str));
}
exports.default = color;
function echo(colorSting) {
    console.log(colorSting.toString());
}
exports.echo = echo;
// print(colors("Shadrack").bgGreen.white.bold.strikethrough);
