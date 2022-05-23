
function round(number: number): number {
    return Math.round(number);
}
function roundUp(number: number): number {
    return Math.ceil(number);
}
function roundDown(number: number): number {
    return Math.floor(number);
}
function toZero(number: number): number {
    if (number <= 0) return Math.ceil(number);
    return Math.floor(number);
}
function fromZero(number: number): number {
    if (number >= 0) return Math.ceil(number);
    return Math.floor(number);
}
function toPrecision(number: number, precision: number = 1, mode: 'normal' | 'up' | 'down' | 'to_zero' | 'from_zero' = 'normal'): number {
    precision = 10 ** precision;
    switch (mode) {
        case 'normal':
            return round(number * precision) / precision;
        case 'up':
            return roundUp(number * precision) / precision;
        case 'down':
            return roundDown(number * precision) / precision;
        case 'to_zero':
            return toZero(number * precision) / precision;
        case 'from_zero':
            return fromZero(number * precision) / precision;
    }
}
function toMultiple(number: number, multiple: number = 1, mode: 'normal' | 'up' | 'down' | 'to_zero' | 'from_zero' = 'normal'): number {
    switch (mode) {
        case 'normal':
            return round(number / multiple) * multiple;
        case 'up':
            return roundUp(number / multiple) * multiple;
        case 'down':
            return roundDown(number / multiple) * multiple;
        case 'to_zero':
            return toZero(number / multiple) * multiple;
        case 'from_zero':
            return fromZero(number / multiple) * multiple;
    }
}
const APPROXIMATION_UNITS = {
    k:  1e3,
    M:  1e6,
    B:  1e9,
    T:  1e12,
    Qa: 1e15,
    Qi: 1e18,
    Sx: 1e21,
    Sp: 1e24,
    Oc: 1e27,
    No: 1e30,
    Dc: 1e33,
}
type ApproximationUnit = keyof typeof APPROXIMATION_UNITS;

function approximate(number: number, precision: number = 1, unit?: ApproximationUnit, locale?: string): string {
    if (!unit) {
        const units = Object.keys(APPROXIMATION_UNITS);
        for (let i = 0; i < units.length; i++) {
            let unit = units[i] as keyof typeof APPROXIMATION_UNITS;
            let divider = APPROXIMATION_UNITS[unit];
            let dividedNumber = number / divider;
            if (dividedNumber >= 1 && dividedNumber < 1000) {
                if (locale) return String(toPrecision(dividedNumber, precision).toLocaleString(locale)) + unit;
                return String(toPrecision(dividedNumber, precision)) + unit;
            }
        }
        return String(toPrecision(number, precision).toLocaleString(locale));
    }
    let divider = APPROXIMATION_UNITS[unit];
    if (locale) return String(toPrecision(number / divider, precision).toLocaleString(locale)) + unit;
    return String(toPrecision(number / divider, precision)) + unit;
}


export const MoreRounding = {
    round,
    roundUp,
    roundDown,
    toZero,
    fromZero,
    toPrecision,
    toMultiple,
    approximate,
}
