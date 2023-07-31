console.log('Truong')
let arr=[
    {name: 'Truong' ,age: 28},
    {name: 'Truong1' ,age: 19},
    {name: 'Truong2' ,age: 20},
    {name: 'Truong3' ,age: 21},
    {name: 'Truong4' ,age: 22},
    {name: 'Truong5' ,age: 23},
];

let filter=arr.find((item,index)=>{
    return item && item.age>21;
});
console.log(filter)
