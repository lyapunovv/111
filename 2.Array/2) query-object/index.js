function queryToObject(query) {
if (typeof query==='string'){
  let str=query.slice(0,1);
  if(str==='?'){
    query=query.slice(1);
  }
}
if (query!=''){
query=('{"'+query+'"}');
while(query.includes('=')){
let i=query.indexOf('=');  
if (i==-1) break;
query=query.slice(0,i)+'":"'+query.slice(i+1);
}

while(query.includes('&')){
let i=query.indexOf('&');  
if (i==-1) break;
query=query.slice(0,i)+'", "'+query.slice(i+1);
}

while(query.includes('"true"')){
  let i=query.indexOf('"true"');  
  if (i==-1) break;
  query=query.slice(0,i)+'true'+query.slice(i+6);
  }

  while(query.includes('"Null"')){
  let i=query.indexOf('"Null"');  
  if (i==-1) break;
  query=query.slice(0,i)+'Null'+query.slice(i+6);
  }

while(query.includes('"false"')){
  let i=query.indexOf('"false"');  
  if (i==-1) break;
  query=query.slice(0,i)+'false'+query.slice(i+7);
  }

while(query.includes('"undefinied"')){
  let i=query.indexOf('"undefinied"');  
  if (i==-1) break;
  query=query.slice(0,i)+'undefinied'+query.slice(i+12);
  }

  console.log(query);
let obj=JSON.parse(query);
console.log(obj);
return obj;
}
else{
  query=('{'+query+'}');
let obj=JSON.parse(query);
return obj;
}
};

window.queryToObject = queryToObject;

export default queryToObject;
