var countries = [];

function countrSort(countries, counName) {
    return countries.sort((country, nextCounName) => {
        let value = country  [counName];
        let nextValue = nextCounName [counName];
        if(counName === "name"){
            return ((value < nextValue) ? -1 : ((value > nextValue) ? 1 : 0));
        } else {
            return ((value < nextValue) ? 1 : ((value > nextValue) ? -1 : 0));
        }
    });
}

function tableSort() {
    $('th.th_country').on('click', (e) => {
        let sortTableCoun = $(e.target).attr('data-sort');
        countrTable(countrSort(countries, sortTableCoun));
        $('#nameCountries').val('');
        $(`th[data-sort=${sortTableCoun}]`).addClass('sortTh');
    });
}

function countrTable(countries,valCountry ) {
    let resultStr = '<table id="table_sort" border = "1"><thead><tr><th>#</th><th  class="td_name th_country" data-sort="name"">Название</th><th>Столица</th><th class="td_pop th_country" data-sort="population">Кол-во население</th><th class="td_area th_country" data-sort="area">Площадь</th><th>Валюты</th><th>Языки</th><th>Флаг</th><th>Соседи</th></tr></thead>';
    for (let index in countries) {
        let element = countries[index];
        if(valCountry && element.name !== valCountry) {
            continue;
        }
        resultStr += `<tr><td>${+index+1}</td><td class="name_country">${element.name}</td><td>${element.capital}</td><td class="pop_country">${element.population}</td><td class="area_country">${element.area}</td><td>`;
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
            for (let searchArray in countries) {
                if (countries[searchArray].alpha3Code === borderItem) {
                    borderNames.push(countries[searchArray].name);
                }
            }
        }

        resultStr += `${borderNames.join(', ')}</td></tr>`;
    };
    resultStr += '</table>';
    
    let countriesNames = countries.map((el) => {
        return el.name;
    });

    if(!valCountry) {
        $( "#nameCountries" ).autocomplete({
            source: countriesNames,
            select: function(event, ui) {
                countrTable(countries, ui.item.value);
            }
        });
    }

    $('.countriesTb').html(resultStr);

    tableSort();

};


$(document).ready(() => {
    $('.ui-widget').hide();

    $('.btn').click(() => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all"
        }).done((data) => {
            $('.ui-widget').show();
            $('.btn').hide();
            countries = data;
            countrTable(data);
        });
    });
});

/* var TSort_Data = new Array ('table_sort', 's', 'i', 'f');
tsRegister(); */


/*     var table = document.getElementById('#table');

    table.onclick = function(sortContry) {
      if (sortContry.target.tagName != 'TH') return;

      sortTable(sortContry.target.cellIndex, sortContry.target.getAttribute('data-type'));
    };
 function sortTable(colNum, type) {
      var tbody = table.getElementsByTagName('tbody')[0];

      var rowsArray = [].slice.call(tbody.rows);

      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
          };
          break;
      }

      rowsArray.sort(compare);

      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      table.appendChild(tbody);

    }  */
    
    /* function sortTable(f,n){
        var rows = $('#table tbody  tr').get();
    
        rows.sort(function(a, b) {
    
            var A = getVal(a);
            var B = getVal(b);
            
    
            if(A < B) {
                return -1*f;
            }
            if(A > B) {
                return 1*f;
            }
            return 0;
        });
    
        function getVal(elm){
            var v = $(elm).children('td').eq(n).text().toUpperCase();
            if($.isNumeric(v)){
                v = parseInt(v,10);
            }
            return v;
        }
    
        $.each(rows, function(index, row) {
            $('#table').children('tbody').append(row);
        });
    }
    var nameCont = 1;
    var popCont = 1;
    var areaCont = 1;
    $(".td_name").click(function(){
        nameCont *= -1;
        var n = $(this).prevAll().length;
        sortTable(nameCont,name);
    });

    $("#td_pop").click(function(){
        popCont *= -1;
        var n = $(this).prevAll().length;
        sortTable(popCont,n);
    });

    $(".td_area").click(function(){
        areaCont *= -1;
        var n = $(this).prevAll().length;
        sortTable(areaCont,n);
    });
 */




