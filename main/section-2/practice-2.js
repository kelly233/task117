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
        if(x.key.length >= 3){
            let arr = x.key.split('-');
            [x.key,x.count]=[arr[0],parseInt(arr[1])];
        }
    }
    return re;
}
module.exports = function countSameElements(collection) {
    let re = expand(collection);
    return resolve(re);
}