# TO

something

A small utility library for converting values from something `TO` something else

## Examples

```javascript
const emptyString = TO.str(null);
const oneAsString = TO.string(1);

const number = TO.number('1234');
const infinity = TO.num(Infinity);
const nan = TO.num('invalid');

const numBool = TO.bool(number);
const infBool = TO.bul(infinity);
const nanBool = TO.boolean(nan);

console.log(
  emptyString,          // ""
  oneAsString,          // "1"
  typeof oneAsString,   // "string"

  number,               // 1234
  typeof number,        // "number"
  nan,                  // NaN
  infinity,             // Infinity

  numBool,              // true
  infBool,              // true
  nanBool,              // false
);
```
