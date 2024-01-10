console.log(`Hello world from HTML`)

// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr = [
    {name: 'thanh', age: 35},
    {name: 'trung', age: 25},
    {name: 'toan', age: 18},
    {name: 'Uyen', age: 6},
    {name: 'Ky', age: 18},
]
//filter, find

let filter = arr.filter((item,index) => {
    // console.log(`Check filter: item: `,item, `index: `, index)
    return item && item.age === 55;
});

let find = arr.find((item,index) => {
    // console.log(`Check filter: item: `,item, `index: `, index)
    return item && item.age === 18;
});

console.log(find)