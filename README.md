# Loose Equality with Null and Undefined

This repository demonstrates a common error in JavaScript related to loose equality (`==`) when handling `null` and `undefined`.  The `foo` function attempts to gracefully handle `null` inputs, but it unexpectedly produces `NaN` when `undefined` is passed.

This highlights the importance of using strict equality (`===`) in JavaScript for clearer and more predictable comparisons.