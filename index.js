function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        const copyOfCollection = collection.slice()
        copyOfCollection.forEach(element => callback(element))
    } else if (typeof collection === "object") {
        const objValuesArray = Object.values(collection);
        objValuesArray.forEach(element => callback(element))
    }
    return collection
};

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
        const mapArray = collection.map(element => callback(element))
        return mapArray
    } else if (typeof collection === "object") {
        const valuesArray = Object.values(collection);
        const mapArray =  valuesArray.map(element => callback(element))
        return mapArray
    }
};

function myReduce(collection, callback, acc) {
    if (typeof acc !== "undefined") {
        if (Array.isArray(collection)) {
            const copyOfCollection = collection.slice();
            const reduceAcc = copyOfCollection.reduce((accumulator, element) => callback(accumulator, element, copyOfCollection), acc)
            debugger
            return reduceAcc
        } else if (typeof collection === "object") {
            const valuesArray = Object.values(collection);
            const reduceAcc = valuesArray.reduce((accumulator, element) => callback(accumulator, element, valuesArray), acc)
            debugger
            return reduceAcc
        }
        debugger
    } else {
        if (Array.isArray(collection)) {
            const copyOfCollection = collection.slice();
            const arrayToIterate = copyOfCollection.slice(1);
            const initialValue = copyOfCollection[0];
            const reduceAcc = arrayToIterate.reduce((accumulator, element) => callback(accumulator, element, arrayToIterate), initialValue)
            debugger
            return reduceAcc
        } else if (typeof collection === "object") {
            const valuesArray = Object.values(collection);
            const arrayToIterate = valuesArray.slice(1);
            const initialValue = valuesArray[0];
            const reduceAcc = arrayToIterate.reduce((accumulator, element) => callback(accumulator, element, arrayToIterate), initialValue)
            debugger
            return reduceAcc
        }
        debugger
    }
    debugger
};

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        const truthyValue = collection.find(element => predicate(element));
        return truthyValue
    } else if (typeof collection === "object") {
        const valuesArray = Object.values(collection);
        const truthyValue = valuesArray.find(element => predicate(element));
        return truthyValue
    }
};

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
        const filterArray = collection.filter(element => predicate(element));
        return filterArray
    } else if (typeof collection === "object") {
        const valuesArray = Object.values(collection);
        const filterArray = valuesArray.filter(element => predicate(element));
        return filterArray
    }
};

function mySize(collection) {
    if (Array.isArray(collection)) {
        const integer = collection.length;
        return integer
    } else if (typeof collection === "object") {
        const valuesArray = Object.values(collection);
        const integer = valuesArray.length;
        return integer
    }
};

function myFirst(array, n) {
    if (typeof n !== "undefined") {
        const nArray = array.slice(0, n);
        return nArray
    } else {
        const element = array[0];
        return element
    }
};

function myLast(array, n) {
    if (typeof n !== "undefined") {
        const nArray = array.slice(n * -1);
        return nArray
    } else {
        const element = array[array.length - 1];
        return element
    }
};

function myKeys(object) {
    const keysArray = Object.keys(object);
    return keysArray
};

function myValues(object) {
    const valuesArray = Object.values(object);
    return valuesArray
};