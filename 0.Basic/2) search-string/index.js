function searchString(obj) {
 let value;
 let result=String("?");
  for (let key in obj){
    if(obj[key]===""||typeof obj[key]=="null"||obj[key]==undefined){
      continue;
    }
    value=String(obj[key]);
    key=String(key);
    result=(result+key+"="+value+"&");
    continue;
  }
  result=result.slice(0,-1);
  return result;
}

window.searchString = searchString;

export default searchString;
