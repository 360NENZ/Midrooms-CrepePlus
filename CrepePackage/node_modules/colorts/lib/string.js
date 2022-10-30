"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
function stringify(colorStyle, func) {
    return Object.defineProperty(String.prototype, colorStyle, { get: func, configurable: true });
}
stringify("strip", function () {
    return (colors_1.default(this)).strip.toString();
});
stringify("capitalize", function () {
    return this[0].toUpperCase() + this.slice(1);
});
stringify("titleCase", function () {
    return this.split(" ").map((value) => {
        return value[0].toUpperCase() + value.slice(1).toLowerCase();
    }).join(" ");
});
stringify("upperCamelCase", function () {
    return this.titleCase.split(" ").join("");
});
stringify("lowerCamelCase", function () {
    const s = this.upperCamelCase;
    return s[0].toLowerCase() + s.slice(1);
});
stringify("camelCase", function () {
    return this.lowerCamelCase;
});
stringify("snakeCase", function () {
    return this.toLowerCase().split(" ").join("_");
});
stringify("kebabCase", function () {
    return this.toLowerCase().split(" ").join("-");
});
stringify("studlyCaps", function () {
    const s = this.camelCase.replace(" ", "");
    return s.split("").map((letter, index) => {
        if (index % 2 !== 0) {
            return letter.toLowerCase();
        }
        else {
            return letter.toUpperCase();
        }
    }).join("");
});
Object.keys(colors_1.styles).forEach((styleName) => {
    stringify(styleName, function () {
        return colors_1.default(this)[styleName].toString();
    });
});
