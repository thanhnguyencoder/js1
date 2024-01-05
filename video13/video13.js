console.log(`Hello world from HTML`)
let arrTop4 = ['MU', 'Chelsea', 'ManCity', 'Live']
let i = 0;
while (i < arrTop4.length){
    if(arrTop4[i].length === 5){
        console.log(`Top club: ${i+1} ${arrTop4[i]}`);
    }else if (arrTop4[i].length === 7){
        console.log(`Top club: ${i+1} ${arrTop4[i]}`);
        break;
    }
    i++;
}