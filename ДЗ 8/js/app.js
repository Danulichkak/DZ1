var contrTable = (contriesText) => {
    let resultStr = '<table border="1"><thead><tr>' +
        '<td>Название</td><td>Столица</td><td>Кол-во население</td><td>Площадь</td><td>Валюты</td><td>Языки</td><td>Флаг</td><td>Соседи</td>' +
        '</tr></thead></thead><tbody>';
    for(let element of contriesText) {
        resultStr += `<tr><td>${element.name}</td><td>${element.capital}</td><td>${element.population}</td><td>${element.area}</td><td>`;
        let currencies = element.currencies.map((item) => {
            return item.name;
        });
        resultStr += `${currencies.join(', ')}</td><td>`;

        let languages = element.languages.map((item) => {
            return item.name;
        });
        resultStr += `${languages.join(', ')}</td><td><img src="${element.flag}"></td><td>`;
        let borderNames = [];
        for (let borderItem of element.borders) {
            for (let searchArray in contriesText) {
                if (contriesText[searchArray].alpha3Code === borderItem) {
                    borderNames.push(contriesText[searchArray].name);
                }
            }
        }

        resultStr += `${borderNames.join(', ')}</td></tr>`;        
    };
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


