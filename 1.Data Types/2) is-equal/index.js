function isEqual(obja, objb) {
  if (!obja || !objb) {
    return false;
  }
  if (typeof obja !== 'object'|| typeof objb !== 'object'){
    return false;
  }
  
  let objaKeys=Object.keys(obja).sort();
  let objbKeys=Object.keys(objb).sort();
  
  if(objaKeys.length !== objbKeys.length){
    return false;
  }

  const sameKeys = objaKeys.every(key => objbKeys.includes(key));

  if (!sameKeys) {
    return false;
  }

  return objaKeys.every(key => {
    const objAKeyValue = obja[key];
    const objBKeyValue = objb[key];
    console.log('1',objaKeys.length)
    console.log('2', objAKeyValue)
    if (
      (!!objAKeyValue && objAKeyValue !== 0 && typeof objAKeyValue === 'object')
      && (!!objBKeyValue && objBKeyValue !== 0 && typeof objBKeyValue === 'object')
    ) {
      const equal = isEqual(objAKeyValue, objBKeyValue);
      console.log(equal)
      return equal;
    } else {
      return objAKeyValue === objBKeyValue;
    }
  })
}

window.isEqual = isEqual;

export default isEqual;

var a = {
  a:1,
  b:1
}

var b = {
  b:1,
  a:1
}