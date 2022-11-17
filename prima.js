function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    for (var i = 2; i < num; i++) 
      if (num % i === 0) return false;
      else return true;
  }

console.log(isPrime(5))
console.log(isPrime(6))