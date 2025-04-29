**1. What was the bug?**
The bug was that the types of `num1` and `num2` in explore.js, printSum() were both strings, so when they were being added and put into `result`, it was merely concatenating strings and not adding numbers.

**2. How would you fix it?**
You can fix this by casting `num1` and `num2` to Numbers so that when they are added with the + operator in result, the numbers are added and we get the expected sum.
