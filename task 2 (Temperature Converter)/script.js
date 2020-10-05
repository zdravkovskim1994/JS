
function cal1(){
    var x = document.getElementById('celsius').value;

    if(x === ''){
        window.alert('Please enter the celsius!');
    }
    else
    {
        document.getElementById('result').innerHTML = Number(x) + 273.15 + ' \xB0K.';
    }
    
     
 }

function cal2(){
    var x = document.getElementById('celsius').value;

    if(x === ''){
        window.alert('Please enter the celsius!');
    }
    else
    {
        document.getElementById('result').innerHTML = (Number(x) * 9/5) + 32 + ' \xB0F.';
    }
    

}