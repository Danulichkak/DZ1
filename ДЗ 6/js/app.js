$('#confirm').on('click', addPet);
var pet = [];
var nextPet = localStorage.getItem('pets');
nextPet = JSON.parse(nextPet);
if (nextPet && nextPet.length) {
    pets = nextPet;
}
var petStr = '';

function addPet() {

    var catName = $('#namePet').val();
    var catAge = $('#agePet').val();
    var catImg = $('#fotoPet').val();

    var pet = {
        namePet: namePet,
        agePet: agePet,
        fotoPet: fotoPet
    };
    
    var petStr = JSON.stringify(pets);
    localStorage.setItem('pets', petStr);
}

