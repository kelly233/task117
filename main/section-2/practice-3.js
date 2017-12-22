'use strict';
function split(arr) {
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes('[')){
           let a = arr[i].substring(0,1);
           let b = parseInt(arr[i].substring(2,arr[i].length));
            arr.splice(i,1,a);
            for(let i=0;i<b-1;i++){
                arr.push(a);
            }
        }
        if(arr[i].includes(':')||arr[i].includes('-')){
           let a = arr[i].substring(0,1);
           let b = parseInt(arr[i].substring(2,arr[i].length));
            arr.splice(i,1,a);
            for(let i=0;i<b-1;i++){
                arr.push(a);
            }
        }
    }
    return result;
}
function expand(arr) {
    return arr.reduce((result, ch) => {
        let entry = result.find((e) => e.name === ch);
    if (entry){
        entry.summary++;
    }
    else {
        result.push({name: ch, summary: 1});
    }
    return result;
}, []);
}


module.exports = function summarySameElements(collection) {
    let re = split(collection);
    return expand(collection,re);

}