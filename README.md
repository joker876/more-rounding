# MoreRounding
A library that offers more number rounding options for JavaScript and TypeScript

## Highlights
* Supports TypeScript!
* Supports Node and browser

## Installation
### Node / TypeScript
```
npm install more-rounding --save
```
### Web
```html
<script src="https://joker876.github.io/more-rounding/dist/index.min.js"></script>
```

## Usage
More Rounding exports a single object, containing all provided functions.
```js
import * as MoreRounding from 'more-rounding';
```

### Basic Functions
#### `MoreRounding.round(number: number): number`
Rounds a number towards the nearest integer. Equivalent to `Math.round()`

* `number` - the number to be rounded.

```js
MoreRounding.round(2.3)   // 2
MoreRounding.round(-2.3)  // -2
MoreRounding.round(2.5)   // 3
MoreRounding.round(-2.5)  // -2
```

#### `MoreRounding.roundUp(number: number): number`
Rounds a number towards the next integer (towards Infinity). Equivalent to `Math.ceil()`

* `number` - the number to be rounded.

```js
MoreRounding.roundUp(2.3)   // 3
MoreRounding.roundUp(-2.3)  // -2
MoreRounding.roundUp(2.5)   // 3
MoreRounding.roundUp(-2.5)  // -2
```

#### `MoreRounding.roundDown(number: number): number`
Rounds a number towards the previous integer (towards negative Infinity). Equivalent to `Math.floor()`

* `number` - the number to be rounded.

```js
MoreRounding.roundDown(2.3)   // 2
MoreRounding.roundDown(-2.3)  // -3
MoreRounding.roundDown(2.5)   // 2
MoreRounding.roundDown(-2.5)  // -3
```

#### `MoreRounding.toZero(number: number): number`
Rounds a number towards the next integer (towards the number 0).

For negative numbers, it is equivalent to `Math.ceil()`. For positive, equivalent to `Math.floor()`.

* `number` - the number to be rounded.

```js
MoreRounding.toZero(2.3)   // 2
MoreRounding.toZero(-2.3)  // -2
MoreRounding.toZero(2.5)   // 2
MoreRounding.toZero(-2.5)  // -2
```

#### `MoreRounding.fromZero(number: number): number`
Rounds a number towards the next integer (away from the number 0).

For negative numbers, it is equivalent to `Math.floor()`. For positive, equivalent to `Math.ceil()`.

* `number` - the number to be rounded.

```js
MoreRounding.fromZero(2.3)   // 3
MoreRounding.fromZero(-2.3)  // -3
MoreRounding.fromZero(2.5)   // 3
MoreRounding.fromZero(-2.5)  // -3
```
### Complex Functions
#### `MoreRounding.toPrecision(number: number, precision?: number, mode?: string): number`
Rounds a number to a certain precision.

* `number` - the number to be rounded.
* `precision` - the amount of decimal places to be rounded to. Positive numbers mean more decimal places, negative numbers will round to subsequent powers of 10. Optional, default 1.
* `mode` - the basic rounding function to use. Optional, default "normal". Available rounding modes are:
  * `normal` - uses `MoreRounding.round`
  * `up` - uses `MoreRounding.roundUp`
  * `down` - uses `MoreRounding.roundDown`
  * `to_zero` - uses `MoreRounding.toZero`
  * `from_zero` - uses `MoreRounding.fromZero`

```js
MoreRounding.toPrecision(2.3725)           // 2.4
MoreRounding.toPrecision(2.3725, 3)        // 2.373
MoreRounding.toPrecision(2.5131, 3, 'up')  // 2.524
MoreRounding.toPrecision(253.5, -2)        // 300
```

#### `MoreRounding.toMultiple(number: number, multiple?: number, mode?: string): number`
Rounds a number to the nearest multiple of a number.

* `number` - the number to be rounded.
* `multiple` - the multiple to round to. Optional, default 1.
* `mode` - the basic rounding function to use. Optional, default "normal". Available rounding modes are:
  * `normal` - uses `MoreRounding.round`
  * `up` - uses `MoreRounding.roundUp`
  * `down` - uses `MoreRounding.roundDown`
  * `to_zero` - uses `MoreRounding.toZero`
  * `from_zero` - uses `MoreRounding.fromZero`

```js
MoreRounding.toMultiple(2.3725)         // 2
MoreRounding.toMultiple(2.3725, 4)      // 4
MoreRounding.toMultiple(12, 5)          // 10
MoreRounding.toMultiple(13, 5)          // 15
MoreRounding.toMultiple(13, 5, 'down')  // 10
MoreRounding.toMultiple(5123, 77)       // 5159
```

#### `MoreRounding.approximate(number: number, multiple?: number, mode?: string, locale?: string): string`
Rounds a number to a certain long number (subsequent powers of 1,000), to a certain precision.

* `number` - the number to be rounded.
* `precision` - the amount of decimal places to be rounded to, on top of the approximation. Positive numbers mean more decimal places, negative numbers will round to subsequent powers of 10. Optional, default 1.
* `unit` - the unit to round to. Accepts any unit from the table found below. Leaving it undefined will approximate it to the highest unit, where the approximation is in this range: 1,000 > x ≥ 1.
* `locale` - if specified, the number will be formatted according to this locale. Uses `Number.prototype.toLocaleString()`.

```js
MoreRounding.approximate(1247)                        // 1.2k
MoreRounding.approximate(351334)                      // 351.3k
MoreRounding.approximate(1354348, 2)                  // 1.35M
MoreRounding.approximate(7346834138, 0, 'M')          // 7347M
MoreRounding.approximate(7346834138, 2, 'M', 'en-US') // 7,346.83M
```

| Unit | Equivalent number |
| ---- | ----------------- |
| `k`  | 1,000             |
| `M`  | 1,000,000         |
| `B`  | 10^9              |
| `T`  | 10^12             |
| `Qa` | 10^15             |
| `Qi` | 10^18             |
| `Sx` | 10^21             |
| `Sp` | 10^24             |
| `Oc` | 10^27             |
| `No` | 10^30             |
| `Dc` | 10^33             |
