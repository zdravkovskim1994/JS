var x = 0;
var element = document.getElementById('number');
element.innerHTML = x;

function button1(){
    element.innerHTML = --x;
}

function button2(){
    element.innerHTML = ++x;
}



// var x = 0;
// document.getElementById('number').innerHTML = 0;

// function button1(){
//     document.getElementById('number').innerHTML = --x;
// }

// function button2(){
//     document.getElementById('number').innerHTML = ++x;
// }