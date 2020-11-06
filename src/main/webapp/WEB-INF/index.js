/**
 *
 */
"use strict";

let validFor
let validEtt
let validMob
let validPass
let validPassRep

const rootElm = document.getElementById('root');

const formElm = rootElm.querySelector('form[name="skjema"]')
const forElm = rootElm.querySelector('input[name="fornavn"]');
const ettElm = rootElm.querySelector('input[name="etternavn"]');
const mobElm = rootElm.querySelector('input[name="mobil"]');
const passElm = rootElm.querySelector('input[name="passord"]');
const passRepElm = rootElm.querySelector('input[name="passordRepetert"]');
const kjonnElm = rootElm.querySelectorAll('input[name="kjonn"]');
const passErr = rootElm.querySelector('#password+span.error');


forElm.addEventListener('input',function (){
  if(forElm.value.length>=2&&forElm.value.length<=20){
    forElm.style.borderColor="green";
    validFor=true;
  }else{
    forElm.style.borderColor="red";
    validFor=false;
  }
});

ettElm.addEventListener('input',function () {
  if(ettElm.value.length>=2&&ettElm.value.length<=20){
    ettElm.style.borderColor="green";
    validEtt=true;
  }else{
    ettElm.style.borderColor="red";
    validEtt=false;
  }
});

mobElm.addEventListener('input',function () {
  if(mobElm.value.length==8){
    mobElm.style.borderColor="green";
    validMob=true;
  }else{
    mobElm.style.borderColor="red";
    validMob=false;
  }
});

passElm.addEventListener('input',function (){
  if(passElm.value.length>=3){
    passElm.style.borderColor="green";
    validPass=true;
  }else{
    passElm.style.borderColor="red";
    validPass=false;
  }
})

passRepElm.addEventListener('input',function (){
  if(passRepElm.value==passElm.value&&passRepElm.value.length>=3){
    passRepElm.style.borderColor="green";
    validPassRep=true;
    }else{
    passRepElm.style.borderColor="red";
    validPassRep=false;
  }
})
function isChecked() {
    return kjonnElm[0].checked||kjonnElm[1].checked;
}
function showErr() {
  if(passElm.validity.valueMissing){
    passErr.textContent = "Du må skrive inn ett passord.";
  }
  else if(passElm.validity.tooShort){
    passErr.textContent = `Passord må være minst ${ passElm.minLength } tegn; du har skrevet inn ${ passElm.value.length }.`;
  }
  passErr.className = 'error active';
}

passElm.addEventListener('input',function (){
  if (passElm.validity.valid) {
    passErr.innerHTML = '';
    passErr.className = 'error';
  } else {
    showErr();
  }
})

function isValidData() {
  return (validPassRep&&validPass&&validMob&&validFor&&validEtt&&isChecked())
}

formElm.addEventListener('submit',function (event){
  if(!isValidData()){
    console.log('invalid data')
    event.preventDefault()
  }

})







