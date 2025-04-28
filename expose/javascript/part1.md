**1. What is printed by line 9? If the code returns an error, explain why.** <br>
Line 9 should print `values added: 20` because the method `sumValues` gets called with the parameters `10,10,true`, so line 3 evaluates to `true` and `num1` and `num2` are each value 10, which makes `result` equal to 20 since it executing `num1 + num2`

**2. What is printed by line 13? If the code returns an error, explain why.** <br>
Line 13 should print `final result: 20` since using a `var` variable for `result` allows it to be accessible even outside the code block it was declared in, just not outside the function it is declared in.

**3. Why should you not use var? Explain why.** <br>
You should not use `var` because it would make the `result` variable accessible even outside the code block in which it was declared, which is not always the functionality you want since parts of the function could reassign the value or cause other unexpected behaviors. 

**4. What is printed by line 9? If the code returns an error, explain why.** <br>
Line 9 should print `values added: 20` because the method `sumValues` gets called with the parameters `10,10,true`, so line 3 evaluates to `true` and `num1` and `num2` are each value 10, which makes `result` equal to 20 since it executing `num1 + num2`

**5. What is printed by line 13? If the code returns an error, explain why.** <br>
The code should return an error since a `let` variable (in this case `result`) cannot be accessed outside the code block it is declared in.

**6. What is printed by line 9? If the code returns an error, explain why.** <br>
The code returns an error because the `result` variable is declared with a `const`, which is not changeable, yet line 7 is trying to reassign the value of `result`, which is not allowed. 

**7. What is printed by line 13? If the code returns an error, explain why.** <br>
The code return an error since a `const` variable (in this case `result`) cannot be reassigned and also cannot be accessed outside the code block it is declared in.


