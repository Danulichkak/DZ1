function contrTable(contriesText,valContry) {
    let resultStr = '<table class="table" border = "1"><thead><tr><th>#</th><td>Название</td><td>Столица</td><td>Кол-во население</td><td>Площадь</td><td>Валюты</td><td>Языки</td><td>Флаг</td><td>Соседи</td></tr></thead></thead><tbody>';
    for (let index in contriesText) {
        let element = contriesText[index];
        if(valContry && element.name !== valContry) {
            continue;
        }
        resultStr += `<tr><td>${+index+1}</td><td class="name_country">${element.name}</td><td>${element.capital}</td><td>${element.population}</td><td>${element.area}</td><td>`;
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
    
    let countriesNames = contriesText.map((el) => {
        return el.name;
    });

    if(!valContry) {
        $( "#nameContries" ).autocomplete({
            source: countriesNames,
            select: function(event, ui) {
                contrTable(contriesText, ui.item.value);
            }
        });
    }

    /* $(document).ready(function () {
        $("#nameContries").keyup(function () {
            _this = this;
            $.each($("#table tbody tr"), function () {
                if ($(this).text().toLowerCase() === -1) {
                    $(this).hide();
                } else {
                    $(this).show();
                };
            });
        });
    }); */


    $('.contries').html(resultStr);
};

$(document).ready(() => {
    $('.ui-widget').hide();

    $('.btn').click(() => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all"
        }).done((data) => {
            $( "#nameContries").val();
            $('.ui-widget').show();
            $('.btn').hide();
            contrTable(data);
        });
    })
});


