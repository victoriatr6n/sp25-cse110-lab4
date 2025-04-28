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
