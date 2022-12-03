
export function round(number: number): number {
    return Math.round(number);
}
export function roundUp(number: number): number {
    return Math.ceil(number);
}
export function roundDown(number: number): number {
    return Math.floor(number);
}
export function roundToZero(number: number): number {
    if (number <= 0) return Math.ceil(number);
    return Math.floor(number);
}
export function roundFromZero(number: number): number {
    if (number >= 0) return Math.ceil(number);
    return Math.floor(number);
}
export function roundToPrecision(number: number, precision: number = 1, mode: 'normal' | 'up' | 'down' | 'to_zero' | 'from_zero' = 'normal'): number {
    precision = 10 ** precision;
    switch (mode) {
        case 'normal':
            return round(number * precision) / precision;
        case 'up':
            return roundUp(number * precision) / precision;
        case 'down':
            return roundDown(number * precision) / precision;
        case 'to_zero':
            return roundToZero(number * precision) / precision;
        case 'from_zero':
            return roundFromZero(number * precision) / precision;
    }
}
export function roundToMultiple(number: number, multiple: number = 1, mode: 'normal' | 'up' | 'down' | 'to_zero' | 'from_zero' = 'normal'): number {
    switch (mode) {
        case 'normal':
            return round(number / multiple) * multiple;
        case 'up':
            return roundUp(number / multiple) * multiple;
        case 'down':
            return roundDown(number / multiple) * multiple;
        case 'to_zero':
            return roundToZero(number / multiple) * multiple;
        case 'from_zero':
            return roundFromZero(number / multiple) * multiple;
    }
}
export const APPROXIMATION_UNITS = {
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
export type ApproximationUnit = keyof typeof APPROXIMATION_UNITS;

export function approximate(number: number, precision: number = 1, unit?: ApproximationUnit, locale?: string): string {
    if (!unit) {
        const units = Object.keys(APPROXIMATION_UNITS);
        for (let i = 0; i < units.length; i++) {
            let unit = units[i] as keyof typeof APPROXIMATION_UNITS;
            let divider = APPROXIMATION_UNITS[unit];
            let dividedNumber = number / divider;
            if (dividedNumber >= 1 && dividedNumber < 1000) {
                if (locale) return String(roundToPrecision(dividedNumber, precision).toLocaleString(locale)) + unit;
                return String(roundToPrecision(dividedNumber, precision)) + unit;
            }
        }
        return String(roundToPrecision(number, precision).toLocaleString(locale));
    }
    let divider = APPROXIMATION_UNITS[unit];
    if (locale) return String(roundToPrecision(number / divider, precision).toLocaleString(locale)) + unit;
    return String(roundToPrecision(number / divider, precision)) + unit;
}
