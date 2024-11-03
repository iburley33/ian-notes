function factorial(n) {
    let result = 1
    for(let i = 2; i <= n; i++){
        result = result * i
    }
    return result
}
console.log(factorial(5))//120

/* 
big-O - O(n)
problem - give an integer 'n', find the factorial of that integer
In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n' 
Factorial of zero is 1
factorial(4) = 4*3*2*1 = 24
*/