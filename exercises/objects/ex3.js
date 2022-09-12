let objectsEqual = function(a, b) {
  if (a === b) return true;
  // let pairsOne = Object.keys(obj1);
  // let pairsTwo = Object.keys(obj2);
  // if (pairsOne.length !== pairsTwo.length) return false;
  // for (let i = 0; i < pairsOne.length; i ++ ) {
  //   if (!pairsTwo.includes(pairsOne[i])) return false;
  //   if (obj2[pairsOne[i]] !== obj1[pairsOne[i]]) return false;
  // }
  // return true;

  return (keysMatch(a,b) && valuesMatch(a,b));
}

function keysMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every( (key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every( key => {
    if (typeof a[key] === 'object') return objectsEqual(a[key], b[key]);
    return a[key] === b[key]
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'})                       === true );                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})             === false );            // false
console.log(objectsEqual({}, {})                                       === true );                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})   === false );  // false
console.log(objectsEqual({a: 'foo', b: {}}, {a: 'foo', b: {}})         === true );                      // true
console.log(objectsEqual({a: 'foo', b: {}}, {a: 'foo', b: {c: 'baz'}}) === false );                      // false
console.log(objectsEqual({a: 'foo', b: {}}, {a: 'foo', b: {}})         === true );                      // true
console.log(objectsEqual({a: 'foo', b: {c: {}}}, {a: 'foo', b: {c: {}}}) === true );                      // true
