let data = [1, 2, 3, 4, 5];

// to get the sets only
let maxSet = data.slice(1); //menghapus data yang paling kecil pada array
let minSet = data.slice(0, 4); //menghapus data yang paling besar pada array

console.log(minSet, maxSet);

// to get just the max/min value
const sum = data.reduce((a, total) => a + total, 0);
console.log(sum - data[data.length - 1], sum - data[0]);
