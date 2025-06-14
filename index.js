// Sum All Primes

// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

// function sumPrimes(num) {
//   return num;
// }
// sumPrimes(10);

// The results should be like :
// sumPrimes(10)  // should return a number.
// sumPrimes(10) // should return 17.
// sumPrimes(977)  // should return 73156.


// define a function takes a number as a parameter
// define a variable to hold the sum of the numbers
// for loop start from the givin number and end at 2
// define a variable
// for loop to do the divisions start from num-1 and at 2
// condition to check the remin of the division and determin if the number is prime
// true start another for loop
// false condition to check if the number is prime and then sum it
// return the sum

// function sumPrimes(num) {

//     function isPrime(n) {
//         if(n < 2) return false;
//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) return false;
//         }
//         return true;
//     }

//     let sum = 0;
//     for (let i = 2; i < num; i++) {
//         if(isPrime(i)) {
//             sum+= i;
//         }   
//     }

//   return sum;
// }


function sumPrimes(num) {

   let sum = 0;

   for (let i = num; i >= 2; i--) {
       let isPrime = true;
       for (let j = i-1; j >=2; j--) {
            if(i%j === 0) {
                isPrime=false;
                break;
            }   
        }
        if(isPrime === true) {
            sum+=i;
        } 
   }

  return sum;
}

console.log(sumPrimes(10));


// index i    index j  condition 1    condition 2  result
// i=10       j=9      true           false
//            j=8      true           false
//            j=7      true           true        sum+7