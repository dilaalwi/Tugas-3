
function angkaprima(num) {
  if (num <= 1) return 'bukan prima';
  if (num ===2) return 'bilangan prima';

  for (var i =2; i < num; i++)
    if (num % i === 0) return 'bukan prima';
    else return 'bilangan prima'
}

console.log(angkaprima(5))
console.log(angkaprima(6))