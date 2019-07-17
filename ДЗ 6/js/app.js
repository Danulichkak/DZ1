$('#confirm').on('click', addPet);
var pets = [];
var backupPets = localStorage.getItem('pets');
backupPets = JSON.parse(backupPets);
if (backupPets && backupPets.length) {
    pets = backupPets;
    buildPets();
}

function buildPets() {
    var petsStr = '';
    for(var pet of pets) {
        petsStr += '<div class="col-md-3">' +
            '<p>' + pet.namePet + ' (' + pet.agePet + 'м.)' + '</p>' +
            '<img src="' + pet.fotoPet + '" width="80%">' +
            '</div>';
    }
    $('.pets').html(petsStr);
    $('input').val('');
    $('#petAge').val(1);
}

function addPet() {

    var namePet= $('#namePet').val();
    var agePet = $('#agePet').val();
    var fotoPet = $('#fotoPet').val();

    var pet = {
        namePet: namePet,
        agePet: agePet,
        fotoPet: fotoPet
    };

    pets.push(pet);
    buildPets();
    var petsStr = JSON.stringify(pets);
    localStorage.setItem('pets', petsStr);
}