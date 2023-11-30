/*
 * File Name: ComplexCode.js
 * Description: This code demonstrates a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
 * Author: [Your Name]
 */

// Function to generate prime numbers up to a given limit using Sieve of Eratosthenes algorithm
function generatePrimes(limit) {
  // Create an array of Boolean values, where each index represents whether the number is prime or not
  var primes = new Array(limit + 1);
  primes.fill(true);

  // 0 and 1 are not prime numbers
  primes[0] = primes[1] = false;

  // Iterate through the numbers and mark non-prime numbers
  for (var i = 2; i <= Math.sqrt(limit); i++) {
    if (primes[i]) {
      // Mark all multiples of the current number as non-prime
      for (var j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Store the prime numbers in a separate array
  var primeNumbers = [];
  for (var k = 0; k <= limit; k++) {
    if (primes[k]) {
      primeNumbers.push(k);
    }
  }

  return primeNumbers;
}

// Test the generatePrimes function
var primesUpTo100 = generatePrimes(100);
console.log("Prime numbers up to 100:", primesUpTo100);

// Function to find the sum of prime numbers using the generatePrimes function
function sumPrimes(limit) {
  var primes = generatePrimes(limit);
  var sum = primes.reduce(function(a, b) {
    return a + b;
  }, 0);

  return sum;
}

// Test the sumPrimes function
var sumUpTo100 = sumPrimes(100);
console.log("Sum of prime numbers up to 100:", sumUpTo100);

// Function to find the average of prime numbers using the generatePrimes function
function averagePrimes(limit) {
  var primes = generatePrimes(limit);
  var sum = primes.reduce(function(a, b) {
    return a + b;
  }, 0);
  var average = sum / primes.length;

  return average;
}

// Test the averagePrimes function
var averageUpTo100 = averagePrimes(100);
console.log("Average of prime numbers up to 100:", averageUpTo100);

// ... continue with more complex code and functions ...