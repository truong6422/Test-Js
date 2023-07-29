console.log('Truong')
let a=3,b=4;
let x=['MU','Liverpol','ManCity'];
// for(let i=0;i<x.length;i++){
//     console.log('Top',i+1,':', x[i]);
//     }
let i=0;
while(i<x.length){
    if(x[i].length===2){
        console.log('Top',i+1,':',x[i])
    }
    else{
        console.log('Top',i+1,':Khong La Top 1 Thi Khong La Gi Ca')
    }
    i++;
}

