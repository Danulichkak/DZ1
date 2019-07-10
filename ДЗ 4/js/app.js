$( ".text" ).css( "color", "=red" );
var confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', saySmth);

function saySmth() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;

    var escapeFlag = false;

    if (firstName.length < 5) {
        $( "<div class='text'>first name is too short</div>" ).appendTo( '.first');
        document.getElementById('firstName').value = '';
        escapeFlag = true;
    }

    if (lastName.length < 5) {
        $( "<div class='text'>last name is too short</div>" ).appendTo( '.last');
        document.getElementById('lastName').value = '';
        escapeFlag = true;
    }

    if (email.length < 5) {
        $( "<div class='text'>email is too short</div>" ).appendTo( '.email');
        document.getElementById('email').value = '';
        escapeFlag = true;
    }
    $( ".text" ).css( "color", "red" );
    if (escapeFlag) { return; }

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    console.log(user);
    alert('Success');
}


  