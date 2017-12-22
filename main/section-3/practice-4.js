'use strict';
function expand(collection) {
    return collection.reduce((result, ch) => {
        let entry = result.find((e) => e.key === ch);
    if (entry) {entry.count++;}
    else {result.push({key: ch, count: 1});}
    return result;
}, []);
}
function resolve(re) {
    for(let x of re){
        if(x.key.includes('-')){
            let arr = x.key.split('-');
            [x.key,x.count]=[arr[0],parseInt(arr[1])];
        }
    }
    return re;
}
function count(collectionA,objectB) {
    return collectionA.map((x)=>{
        if(objectB.value.find((e)=>e===x.key)){
        x.count -= parseInt(x.count/3);
    }
    return x;
});
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = resolve(expand(collectionA));
  return count(result,objectB);
}
