$(document).ready(function() {
    var companies = getCompanies();

    Object.keys(companies).forEach(key => { append_company(companies[key], key) });

});


function append_company(array, key) {

    var company = array;
    var companyid = key;
    var logo = 'img/logos/' + companyid + '.png';
    var place = company.postalcode + ' ' + company.city
    var profile = "profilepro.html?id=" + companyid;


    $('tbody').append('<tr id="tr' + key + '"></tr>');
    $('#tr' + key).attr("onclick", "window.location='" + profile + "'");
    $('#tr' + key).append('<td> <img src="' + logo + '" class="img-thumbnail logos-small " alt="..."></th>');
    $('#tr' + key).append('<td class=" table-text">' + company.name + '</td>');
    $('#tr' + key).append('<td class=" table-text">' + place + '</td>');
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function getCompanies() {
    var url = 'https://lehrmesse.ch/api/companies/';
    var result = runGETRequest(url);
    return result;

}

function runGETRequest(url) {
    var data = [];
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    data = JSON.parse(xmlHttp.responseText);
    return data;
}