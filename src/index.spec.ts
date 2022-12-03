import { round, roundDown, roundUp, roundToZero, roundFromZero, roundToMultiple, roundToPrecision, approximate } from "./index";

describe('MoreRounding', () => {
    it('should round correctly', () => {
        expect(round(1.6)).toBe(2);
        expect(round(-1.6)).toBe(-2);
        expect(round(0)).toBe(0);
    });
    it('should round up correctly', () => {
        expect(roundUp(1.6)).toBe(2);
        expect(roundUp(-1.6)).toBe(-1);
        expect(roundUp(0)).toBe(0);
    });
    it('should round down correctly', () => {
        expect(roundDown(1.6)).toBe(1);
        expect(roundDown(-1.6)).toBe(-2);
        expect(roundDown(0)).toBe(0);
    });
    it('should round to zero correctly', () => {
        expect(roundToZero(1.6)).toBe(1);
        expect(roundToZero(-1.6)).toBe(-1);
        expect(roundToZero(0)).toBe(0);
    });
    it('should round from zero correctly', () => {
        expect(roundFromZero(1.6)).toBe(2);
        expect(roundFromZero(-1.6)).toBe(-2);
        expect(roundFromZero(0)).toBe(0);
    });
    it('should round to multiple correctly', () => {
        expect(roundToMultiple(1.6)).toBe(2);
        expect(roundToMultiple(-1.6)).toBe(-2);
        expect(roundToMultiple(0)).toBe(0);
        expect(roundToMultiple(12, 5)).toBe(10);
        expect(roundToMultiple(13, 5)).toBe(15);
        expect(roundToMultiple(-1.6, 5)).toBe(0);
    });
    it('should round to precision correctly', () => {
        expect(roundToPrecision(1.5913, 1)).toBe(1.6);
        expect(roundToPrecision(1.5913, 3)).toBe(1.591);
        expect(roundToPrecision(-1.5913, 2)).toBe(-1.59);
    });
    it('should approximate correctly', () => {
        expect(approximate(3154282)).toBe('3.2M');
        expect(approximate(151866, 0)).toBe('152k');
        expect(approximate(15646514, 2)).toBe('15.65M');
        expect(approximate(Number.MAX_SAFE_INTEGER, 3)).toBe('9.007Qa');
        expect(approximate(Number.MAX_SAFE_INTEGER, 0, 'T')).toBe('9007T');
        expect(approximate(3154282, 2, 'k', 'en-US')).toBe('3,154.28k');
    });
})