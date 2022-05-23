import { MoreRounding } from ".";

describe('MoreRounding', () => {
    it('should round correctly', () => {
        expect(MoreRounding.round(1.6)).toBe(2);
        expect(MoreRounding.round(-1.6)).toBe(-2);
        expect(MoreRounding.round(0)).toBe(0);
    });
    it('should round up correctly', () => {
        expect(MoreRounding.roundUp(1.6)).toBe(2);
        expect(MoreRounding.roundUp(-1.6)).toBe(-1);
        expect(MoreRounding.roundUp(0)).toBe(0);
    });
    it('should round down correctly', () => {
        expect(MoreRounding.roundDown(1.6)).toBe(1);
        expect(MoreRounding.roundDown(-1.6)).toBe(-2);
        expect(MoreRounding.roundDown(0)).toBe(0);
    });
    it('should round to zero correctly', () => {
        expect(MoreRounding.toZero(1.6)).toBe(1);
        expect(MoreRounding.toZero(-1.6)).toBe(-1);
        expect(MoreRounding.toZero(0)).toBe(0);
    });
    it('should round from zero correctly', () => {
        expect(MoreRounding.fromZero(1.6)).toBe(2);
        expect(MoreRounding.fromZero(-1.6)).toBe(-2);
        expect(MoreRounding.fromZero(0)).toBe(0);
    });
    it('should round to multiple correctly', () => {
        expect(MoreRounding.toMultiple(1.6)).toBe(2);
        expect(MoreRounding.toMultiple(-1.6)).toBe(-2);
        expect(MoreRounding.toMultiple(0)).toBe(0);
        expect(MoreRounding.toMultiple(12, 5)).toBe(10);
        expect(MoreRounding.toMultiple(13, 5)).toBe(15);
        expect(MoreRounding.toMultiple(-1.6, 5)).toBe(0);
    });
    it('should round to precision correctly', () => {
        expect(MoreRounding.toPrecision(1.5913, 1)).toBe(1.6);
        expect(MoreRounding.toPrecision(1.5913, 3)).toBe(1.591);
        expect(MoreRounding.toPrecision(-1.5913, 2)).toBe(-1.59);
    });
    it('should approximate correctly', () => {
        expect(MoreRounding.approximate(3154282)).toBe('3.2M');
        expect(MoreRounding.approximate(151866, 0)).toBe('152k');
        expect(MoreRounding.approximate(15646514, 2)).toBe('15.65M');
        expect(MoreRounding.approximate(Number.MAX_SAFE_INTEGER, 3)).toBe('9.007Qa');
        expect(MoreRounding.approximate(Number.MAX_SAFE_INTEGER, 0, 'T')).toBe('9007T');
        expect(MoreRounding.approximate(3154282, 2, 'k', 'en-US')).toBe('3,154.28k');
    });
})