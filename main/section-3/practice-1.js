'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   return collectionA.map((x)=>{
      if(objectB.value.find((e)=>e===x.key)){
        x.count--;
      }
    return x;
    });
}
