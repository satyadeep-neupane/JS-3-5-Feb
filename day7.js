const num = [1, 2, 3, 4, 5, 'a'];

num.forEach((value, index, arr) => 
{
    console.log(value, index, arr);
})

const sq = num.map((value, index, arr) => {
    return value * value;
})

console.log(sq);

const even = num.filter((value, index, arr) => {
    return value % 2 == 0;
})

console.log(even);

const sum = num.reduce((acc, value, index, arr) => {
    return acc + value;
})

console.log(sum);

console.log(num.every(value => !isNaN(value)))
console.log(num.some(value => !isNaN(value)))