# Example

In IE 10 and below, the code in `src/index.js` would print

```
Sub instance' value is 123

Sub static value is undefined
```

which is not correct because static value should be inherited.

The code in `lib/index.js` show the real code runs in browser which is transform by `babel` from `src/index.js`.

Open `without-polyfill.html` and `with-polyfill.html` in IE10 or below to see the difference.
