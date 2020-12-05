$(document).ready(function() {
    var companies = getCompanies();

    Object.keys(companies).forEach(key => { append_company(companies[key], key) });

});

function append_company(array, key) {

    var company = array;
    var companyid = key;
    var logo = 'img/logos/' + companyid + '.png';
    var place = company.postalcode + ' ' + company.city
    var profile = "profile.html?id=" + companyid;


    $('tbody').append('<tr id="tr' + key + '"></tr>');
    $('#tr' + key).attr("onclick", "window.location='" + profile + "'");
    $('#tr' + key).append('<td> <img src="' + logo + '" class="img-thumbnail logos-small " alt="..."></th>');
    $('#tr' + key).append('<td class=" table-text">' + company.name + '</td>');
    $('#tr' + key).append('<td class=" table-text">' + place + '</td>');
}