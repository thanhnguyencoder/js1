console.log(`Hello world from HTML - Map`)

let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }

// console.log(`check value arr: `, arr)

let mapArr = arr.map((item, index) => {
    return (
        `<td>${item} - ${index}</td>`
    );
})

console.log('Arr',arr)
console.log('Map Arr',mapArr)