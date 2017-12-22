'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter((x)=>objectB.value.includes(x.key)).map((x)=>x.key);
}
