var confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', saySmthText);

function saySmthText() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
     if (firstName.length <5 || lastName.length <5 || email.length <5) {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        alert('У Вас меньше 5 символов посторите попытку');
        return;
    }    
       
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    console.log(user);
    alert('Success');
}


/* var confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', saySmthText);

function saySmthText() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
     if (firstName.length >= 5 || lastName.length >= 5 || email.length >= 5) {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        return;
     }else if (firstName.length <5) {
            alert('Имя очень короткое');
     }else if (lastName.length <5) {
        alert('Фамилия очень короткая');
     }else if ( email.length <5) {
        alert('Email очень короткий');
    }  
       
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    console.log(user);
} */
