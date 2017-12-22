'use strict';
module.exports = function countSameElements(collection) {
    return collection.reduce((result, ch) => {
        let entry = result.find((e) => e.key === ch);
    if (entry) {
        entry.count++;
    } else {
        result.push({key: ch, count: 1});
    }

    return result;
}, []);
}