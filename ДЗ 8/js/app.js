var contrTable = (contriesText) => {
    let resultStr = '<table border="1"><thead><tr>' +
        '<td>Название</td><td>Столица</td><td>Кол-во население</td><td>Площадь</td><td>Валюты</td><td>Языки</td><td>Флаг</td><td>Соседи</td>' +
        '</tr></thead></thead><tbody>';
    for(let element of contriesText) {
        resultStr += `<tr><td>${element.name}</td><td>${element.capital}</td><td>${element.population}</td><td>${element.area}</td><td>${element.currencies}</td><td>${element.languages}</td>
<td><img src="${element.flag}"></td><td>${element.borders}</td></tr>`;
      
    }
    resultStr += '</tbody></table>';
    $('.contries').html(resultStr);
};

$(document).ready(() => {
    $('.btn').click(() => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            method: 'GET'
        }).done((contriesText) => {
            console.log(contriesText);
            contrTable(contriesText);
        });
    })
});



