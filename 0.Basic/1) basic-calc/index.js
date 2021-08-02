function basicCalc(operation, a, b) {
let result;

switch(operation){
  case "+": result=Number(a)+Number(b);
  break;
  case "-": result=Number(a)-Number(b);
  break;
  case "/": result=Number(a)/Number(b);
  break;
  case "*": result=Number(a)*Number(b);
  break;
}
return result;
}

window.basicCalc = basicCalc;

export default basicCalc;
