$('#confirm').on('click', addPet);
var pets = [];
var backupPets = localStorage.getItem('pets');
backupPets = JSON.parse(backupPets);
if (backupPets && backupPets.length) {
    pets = backupPets;
    buildPets();
}

function buildAndSavePets(){
    buildPets();
    var petsStr = JSON.stringify(pets);
    localStorage.setItem('pets', petsStr);
}

function changeNamePet(){
    buildPets();
    var petsStr = JSON.stringify(pets);
    localStorage.setItem('pets', petsStr);
}


function buildPets() {
    var petsStr = '';
    for (var pet of pets) {
        petsStr += '<div class="col-md-3  change">' +
            '<p>' + pet.namePet + ' (' + pet.agePet + ')' + '</p>'  +
            '<img src="' + pet.fotoPet + '" width="85%" + >' + '<button class="chanPet" style="color: red">' + 'Change Name' + '</button>' + '<button class="delPet" style="color: blue">' + 'Delete' + '</button>'  + '</div>';
    }
    $('.pets').html(petsStr);
    $('input').val('');
    $('.agePet').val(1);
    $('.delPet').on('click', deletePet);  
    $('.chanPet').on('click', changePet); 
}

function deletePet() {
    pets.splice($(this).parents('.col-md-3').index(),1);
    buildAndSavePets();
}

function changePet() {
    /* change.val($(this).parents('.namePet').index(),1); */
    $('.namePet').val('new value');
    /* var a = $('.namePet').val();
    console.log(a);
    $('#namePet').val(); */
   /*  var a = $('.namePet').attr('title');
    console.log(a); */
    changeNamePet();
}

function addPet() {

    var namePet = $('#namePet').val();
    var agePet = $('#agePet').val();
    var fotoPet = $('#fotoPet').val();

    var pet = {
        namePet: namePet,
        agePet: agePet,
        fotoPet: fotoPet
    };


    pets.push(pet);
    buildAndSavePets();
    changeNamePet();
}


 /*    $( ".delPet" ).click(function() {
        localStorage.removeItem('col-md-3');
      });
      
} */

    