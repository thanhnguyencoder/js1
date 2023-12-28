let obj = {
    name: 'Thanh',
    age : 35,
    address : `185 Tram Lac, My Hanh Bac, Duc Hoa, Long An`,
    gender : `Male `
};
let b = 'name';
// obj[b] = 'Uyen';
obj.name = 'Hung';
console.log (`Xuất giá trị name trong Object là ${obj['name']}`);
console.log (`Giá trị của b là ${b}`); 