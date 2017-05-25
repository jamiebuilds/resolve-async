# resolve-async

> Typed async [resolve](https://github.com/substack/node-resolve) function

```js
// @flow
import resolveAsync from 'resolve-async';

resolveAsync('./file.js', { basedir: __dirname }).then(filePath => {
  console.log(filePath); // "/path/to/file.js"
});
```
