**1. What will happen at line 12 and why? If the code causes an error, explain why.** <br>
Line 12 will print 3 because `i` was declared as a `var` so it can be accessed outside the for-loop. The last time `i` is updated, it will be updated to 3 since it goes through the length of the `prices` array which has 3 prices.

**2. What will happen at line 13 and why? If the code causes an error, explain why.** <br>
Lie 13 would print `150` since it would last get updated for the last element in the `prices` array, which is 300. Since the discount is 0.5, `discountedPrice` gets set to 300 * 0.5, which is 150. Since `discountedPrice` is a `var`, you can still access it outside the for-loop where it is declared.

**3. What will happen at line 14 and why? If the code causes an error, explain why.** <br>
Line 14 will also print `150` since `finalPrice = Math.round(discountedPrice * 100) / 100` = 150. Once again, `finalPrice` is a `var`, so it can be accessed in the for-loop and outside of it.

**4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.** <br>
This function will return `discounted`, which is an array of the new discounted prices. This `discounted` array will contain `[50,100,150]` since the discount is 0.5 and the original `prices` are `[100,200,300]`. The for-loop goes through each element in the `price` array and applies the discount, then pushing this new discounted price into `discounted`. It can still be accessed at line 16 since the variable was declared as a `var`.

**5. What will happen at line 12 and why?  If the code causes an error, explain why.** <br>
The code causes an error since `i` is a `let` variable, so it can only be accessed within the code block it is declared in, which is the for-loop. In line 14, it is trying to print out `i` outside of the for-loop, which is not allowed because it is out of scope.

**6. What will happen at line 13 and why? If the code causes an error, explain why.** <br>
The code causes an error since `discountedPrices` is declared and defined as a `let` variable inside the body of the for-loop, so it cannot be accessed outside of the for-loop. Line 13 tries to print out `discountedPrices` outside of the for-loop, which errors out.

**7.  What will happen at line 14 and why? If the code causes an error, explain why.** <br>
Line 14 prints out `150` since `finalPrice` is defined in the function but outside the for-loop. The last time it is updated is in the for-loop, which is `Math.round(150 * 100) / 100` = 150
since `discountedPrice` = 300 * 0.5 = 150.

**8. What will this function return? Give a brief explanation. If the code causes an error, explain why.** <br>
This function will return `discounted`, which is an array of the new discounted prices. This `discounted` array will contain `[50,100,150]` since the discount is 0.5 and the original `prices` are `[100,200,300]`. The for-loop goes through each element in the `price` array and applies the discount, then pushing this new discounted price into `discounted`. It can still be accessed at line 16 since the variable was declared as a `let` outside the for-loop and inside the function scope.

**9. What will happen at line 11 and why? If the code causes an error, explain why** <br>
The code causes an error because line 11 is trying to print out `i`. but `i` is defined as a `let` in the for-loop, but line 11 is outside of the for-loop, so `i` cannot be accessed there.

**10. What will happen at line 12 and why? If the code causes an error, explain why.** <br>
Line 12 would print 3 because `length` is defined as a `const` at the beginning of the function, and it is set to the length of the `prices` array, which does not change. Line 12 can access the `length` variable since its in the same scope as where it was declared. Since the length of `prices` is 3, line 12 will print out 3.

**11. What will this function return? Give a brief explanation. If the code causes an error, explain why** <br>
This function will return `discounted`, which is an array of the new discounted prices. This `discounted` array will contain `[50,100,150]` since the discount is 0.5 and the original `prices` are `[100,200,300]`. The for-loop goes through each element in the `price` array and applies the discount, then pushing this new discounted price into `discounted`. It can still be accessed at line 16 since the variable was declared as a `const` outside the for-loop and inside the function scope. Although you cannot reassign the value of `const` variables, this is merely modifying the array stored in `discounted`, which is allowed.

**12.**
```
let student = {
  name: 'Sarah',
  major: 'Computer Science',
  'Grad Year': '2022',
  greeting: function() { console.log("Hello!");},
  'Favorite Teacher': {
    name: 'Thomas Powell',
    course: 'CSE 110'
    },
  courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```
- part A:
`let student_name = student.name`
- part B:
`let grad_year = student["Grad Year"]`
- part C:
`let greeting = student.greeting()`
- part D:
`let teacher = student["Favorite Teacher"].name`
- part E:
`let first_course = student.courseLoad[0]`

**13. Arithmetic** <br>
- '3' + 2
  - Output: '32' since the '3' is a string, JavaScript will automatically convert the 2 into a string to concatenate them
- '3' - 2
  - Output: 1 since the subtraction operator only works with numbers, it will convert the '3' to a 3 and subtract 2 from it
- 3 + null
  - Output: 3 since JavaScript turns the null into a 0 (according to the numeric conversion rules)
- '3' + null
  - Output: '3null' since JavaScript converts `null` into a string (because '3' is a string and we are using the + operator)
- true + 3
  - Output: 4 since true gets converted to 1 and added to the 3 (according to the numeric conversion rules)
- false + null
  - Output: 0 since both false and null get converted to 0 
- '3' + undefined
  - Output: '3undefined' since this is using the + operator and there is a string, JavaScript will convert the `undefined` to a string and concatenate it to '3'   
- '3' - undefined
  - Output: NaN since this is using the - operator, it is expecting to operate on numbers so JavaScript converts '3' to 3 and `undefined` to NaN, and an operation that has NaN results in NaN
 
**14.Comparison**
- '2' > 1
  - Output: true since '2' gets converted to 2 which is greater than 1
- '2' < '12'
  - Output: false because it compares '2' and '1' first and since '2' is greater than '1', it returns false
- 2 == '2'
  - Output: true since the == operator does type conversions so it'll convert '2' to 2 
- 2 === '2'
  - Output: false because === checks the actual equality without using type conversion, so if the two things being compared are different data types, it will evaluate to false
- true == 2
  - Output: false because true gets converted to 1, which is not equal to 2
- true === Boolean(2)
  - Output: true because Boolean(2) casts 2 to a boolean, which would be true since it is not 0.

**15. Explain the difference between the == and === operators**
The == operator will first do the JavaScript type conversion and then check equality, whereas === checks for equality (value and type) but does not type convert.

**17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result?**
The `modifyArray` function takes in `array` and `callback` parameters. With the call, modifyArray([1,2,3], doSomething), it will go through the array [1,2,3], and for each element, it will call the `doSomething` function on it. The `doSomething` function will double each value that is passed to it, so when it is done returning that, `modifyArray` will push this new value into `newArray`, which will be returned at the end with [2,4,6] stored.

**19. What is the output of the above code?**
The output is: <br>
1 <br>
4 <br>
3 <br>
2 <br>
since `console.log(1)` and `console.log(4)` do not have a `setTimeout` called on them while `console.log(3)` waits 0ms and `console.log(2)` waits 1000ms.
