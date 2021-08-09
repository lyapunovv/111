const form = document.querySelector('.form');
const text = document.getElementById('text');
let bgColor;

function submitForm (evt) {
    evt.preventDefault();
}
    


function createInput(){
    let i=0;
    let cd = 'cd' + (Math.floor(Math.random() * 6));
    console.log(cd);
    colorInput(cd);
    
    let textInput = text.value;
    let newDiv=document.createElement('div');
    newDiv.className='itemnewdiv';
    newDiv.innerHTML=('<div class="checkbox" style="background-color: '+bgColor+'"  id="d'+i+'"><input type="checkbox" id="c'+i+'" onchange="changeCondition(\'c'+i+'\', \'d'+i+'\', \'t'+i+'\');"></div><div class="txt" style="background-color: '+bgColor+'" id="t'+i+'">'+textInput+'</div>');
    document.getElementById('item').append(newDiv);
    i++;
}

function changeCondition(c, d, t){
    console.log(c);
    let changeC=document.getElementById(c);
    let changeD=document.getElementById(d);
    let changeT=document.getElementById(t);
    if (changeC.checked) {
        changeD.className='checkbox1';
        changeT.className='txt1';
	}
	else {
        changeD.className='checkbox';
        changeT.className='txt';
	}
}

function colorInput (cd){
    console.log(cd);
    bgColor=$('#'+cd).css('background-color');
    console.log(bgColor);
    return bgColor;
}    
