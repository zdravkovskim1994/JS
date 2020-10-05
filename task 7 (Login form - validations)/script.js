    //Validation messages - Username
    let charUser = document.getElementById('charUser');

    //Validation messages - Password
    let oneLowercase = document.getElementById('lowercase');
    let capital = document.getElementById('capital');
    let number = document.getElementById('number');
    let charPass = document.getElementById('charPass');

    //Inputs
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    //Validation Username
    username.onfocus = function() {
        document.getElementById('messageUser').style.display = 'block';
    }

    username.onblur = function() {
        document.getElementById('messageUser').style.display = 'none';
    }

    //min 5 chars
    function usernameValitaion() {
        let reLength = /[a-zA-Z]{5,}/;    // min five chars

        if(username.value.match(reLength)) {
            charUser.classList.remove('invalid');
            charUser.classList.add('valid');    
        }else {
            charUser.classList.remove('valid');
            charUser.classList.add('invalid');
        }
    }


    //Validation Password
    password.onfocus = function() {
        document.getElementById('messagePass').style.display = 'block';
    }
    
    password.onblur = function() {
        document.getElementById('messagePass').style.display = 'none';
    }

    
    function passwordValidation() {
        let reLowerCase = /[a-z]/;                 // one lowercase
        let reCapital = /[A-Z]/;                   // one upper case
        let reNumber = /[0-9]/;                    // one number
        let reLength = /.{8,}/;                    // min eight chars
        
        //lowercase
        if(password.value.match(reLowerCase)) {
            oneLowercase.classList.remove('invalid');
            oneLowercase.classList.add('valid');
        }else {
            oneLowercase.classList.remove('valid');
            oneLowercase.classList.add('invalid');
        }

        //uppercase
        if(password.value.match(reCapital)) {
            capital.classList.remove('invalid');
            capital.classList.add('valid');
        }else {
            capital.classList.remove('valid');
            capital.classList.add('invalid');
        }
        

        //one number
        if(password.value.match(reNumber)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        }else {
            number.classList.remove('valid');
            number.classList.add('invalid');
        }
        

        //min 8 chars
        if(password.value.match(reLength)) {
            charPass.classList.remove('invalid');
            charPass.classList.add('valid');
        }else {
            charPass.classList.remove('valid');
            charPass.classList.add('invalid');
        }
    }


    //call two functions
    function validate() {
        let name = usernameValitaion(),
            pass = passwordValidation();
        return name && pass;
    }