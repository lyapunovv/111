const form = document.querySelector('.form');
let i=Number(1);

function CloneInput(){
    let textInput= document.getElementById('text1');
    let cloneTextInput=textInput.cloneNode(true);
    if (i%2!==0){
        cloneTextInput.value=cloneTextInput.value.toUpperCase();
    }
    else{
        cloneTextInput.value=cloneTextInput.value.toLowerCase();
    }
    i++;
    if (cloneTextInput.value=='555'){
        cloneTextInput.value='---';
    }
    document.getElementById('d').append(cloneTextInput);
    textInput.id='aaa';  
}

function submitForm (evt) {
    evt.preventDefault();
}
// form.addEventListener('submit', submitForm);