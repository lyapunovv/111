function sumCheck(a, b) {

  let sum;

    if(typeof(a)=="number"&&typeof(b)=="number"){
     sum=a+b; 
     return sum;
    }
      else {
        throw "Wrong arguments type!";
      }
   
  
}

window.sumCheck = sumCheck;

export default sumCheck;
