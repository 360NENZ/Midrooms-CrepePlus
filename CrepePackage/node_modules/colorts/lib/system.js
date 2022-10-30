"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
class System {
    static colorSupported() {
        let supported = false;
        if ((process_1.argv.indexOf("--no-color") !== -1) ||
            (process_1.argv.indexOf("--color=false") !== -1) || process.env.TERM === "dumb") {
            supported = false;
        }
        else if (System.colorEnabled() || System.colorAllowed()) {
            supported = true;
        }
        else {
            supported = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM);
        }
        return supported;
    }
    static isWin32() {
        return process.platform === "win32";
    }
    static hasColorOutput() {
        return (process.stdout && !process.stdout.isTTY);
    }
    static colorTermEnv() {
        return ("COLORTERM" in process.env);
    }
    static colorAllowed() {
        return process_1.argv.indexOf("--color") !== -1 ||
            process_1.argv.indexOf("--color=true") !== -1 ||
            process_1.argv.indexOf("--color=always") !== -1;
    }
    static colorEnabled() {
        return System.hasColorOutput() || System.isWin32() || System.colorTermEnv();
    }
}
exports.System = System;
