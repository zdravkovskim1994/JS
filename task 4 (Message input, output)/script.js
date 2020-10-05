function msgDisplayEnter(event) {
    var input = document.getElementById("messageText");
    var output = document.getElementById('messageOutput');
    var x = event.keyCode;

    if (x == 13) { 
        output.innerHTML = input.value.toUpperCase();
        input.blur()
        input.value = '';   
    }
}


function msgDisplay() {
    var input = document.getElementById('messageText');
    var output = document.getElementById('messageOutput');

    if(input.value === '') {
        window.alert('Please write a message!')
    }
    else
    {
        output.innerHTML = input.value.toUpperCase();
        input.value = ''; 
    }
}