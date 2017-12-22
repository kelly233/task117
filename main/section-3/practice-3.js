'use strict';
function expand(arr) {
   return arr.reduce((result,ch)=>{
      let entry = result.find((e)=>e.key===ch);
      if(entry){entry.count++;}
      else{result.push({key:ch,count:1});}
      return result;
    },[]);
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
  let result = expand(collectionA);
  return count(result,objectB);
}
