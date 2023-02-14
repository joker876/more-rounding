/**
 * Returns the nearest integer by rounding to the nearest whole number.
 * @param number - The number to round.
 * @returns The rounded number.
 */
export function round(number: number): number {
    return Math.round(number);
}

/**
 * Returns the smallest integer greater than or equal to the given number.
 * @param number - The number to round up.
 * @returns The rounded number.
 */
export function roundUp(number: number): number {
    return Math.ceil(number);
}

/**
 * Returns the largest integer less than or equal to the given number.
 * @param number - The number to round down.
 * @returns The rounded number.
 */
export function roundDown(number: number): number {
    return Math.floor(number);
}

/**
 * Rounds a number towards zero.
 * 
 * If the number is positive, it is rounded down. If it is negative, it is rounded up.
 * @param number - The number to round.
 * @returns The rounded number.
 */
export function roundToZero(number: number): number {
    if (number <= 0) return Math.ceil(number);
    return Math.floor(number);
}

/**
 * Rounds a number away from zero.
 * 
 * If the number is positive, it is rounded up. If it is negative, it is rounded down.
 * @param number - The number to round.
 * @returns The rounded number.
 */
export function roundFromZero(number: number): number {
    if (number >= 0) return Math.ceil(number);
    return Math.floor(number);
}

/**
 * Rounds a number to a specified precision using a specified rounding mode.
 * @param number - The number to round.
 * @param precision - The number of decimal places to round to.
 * @param mode - The rounding mode to use. Defaults to 'normal'.
 * @returns The rounded number.
 */
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

/**
 * Rounds a number to the nearest multiple of a specified value using a specified rounding mode.
 * @param number - The number to round.
 * @param multiple - The value to round to.
 * @param mode - The rounding mode to use. Defaults to 'normal'.
 * @returns The rounded number.
 */
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
    k: 1e3,
    M: 1e6,
    B: 1e9,
    T: 1e12,
    Qa: 1e15,
    Qi: 1e18,
    Sx: 1e21,
    Sp: 1e24,
    Oc: 1e27,
    No: 1e30,
    Dc: 1e33,
}
/**
 * Type used to specify the unit to used for number approximation.
 * 
 * These are the abbreviations used for the first 11 major numbers (up to Decillion).
 */
export type ApproximationUnit = keyof typeof APPROXIMATION_UNITS;

/**
 * Approximates a number to a smaller, more human-readable value.
 * @param {number} number The number to approximate.
 * @param {number} [precision=1] The number of decimal places to include. Defaults to `1`.
 * @param {ApproximationUnit | undefined} unit The abbreviation for the approximation unit to use. If not provided, will use the largest unit that keeps the value as `1 <= n < 1000`.
 * @param {string | undefined} locale The locale string to use when formatting the result with `toLocaleString()`. If not specified, `String()` will be used.
 * @returns The approximate value as a string with the abbreviation for the unit (specified or assumed) appended to it.
 */
export function approximate(number: number, precision: number = 1, unit?: ApproximationUnit, locale?: string): string {
    if (!unit) {
        const units = Object.keys(APPROXIMATION_UNITS);
        for (let i = 0; i < units.length; i++) {
            let unit = units[i] as keyof typeof APPROXIMATION_UNITS;
            let divider = APPROXIMATION_UNITS[unit];
            let dividedNumber = number / divider;
            if (dividedNumber >= 1 && dividedNumber < 1000) {
                if (locale) return roundToPrecision(dividedNumber, precision).toLocaleString(locale) + unit;
                return String(roundToPrecision(dividedNumber, precision)) + unit;
            }
        }
        return String(roundToPrecision(number, precision).toLocaleString(locale));
    }
    let divider = APPROXIMATION_UNITS[unit];
    if (locale) return roundToPrecision(number / divider, precision).toLocaleString(locale) + unit;
    return String(roundToPrecision(number / divider, precision)) + unit;
}
