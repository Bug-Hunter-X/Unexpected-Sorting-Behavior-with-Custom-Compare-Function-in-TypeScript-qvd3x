# Unexpected Sorting Behavior with Custom Compare Function
This repository demonstrates a subtle bug in TypeScript related to custom comparison functions used with the `sort` method.  The provided code showcases a `compare` function that works correctly for numbers but fails when non-numbers are present, leading to unexpected sorting outcomes. The solution provides a robust comparison function to handle various data types.

## Bug
The `bug.ts` file contains a `compare` function and demonstrates the incorrect sorting behavior when the array contains heterogeneous data types.

## Solution
The `bugSolution.ts` file provides a more robust comparison function using type guards to handle different data types appropriately, guaranteeing correct sorting for any comparable data type.
