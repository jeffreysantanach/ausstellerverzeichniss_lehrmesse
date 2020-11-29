$(document).ready(function() {
    var id = 3;
    var company = getCompany(id);
    console.log(company);


    var booth = 'Stand: ' + company.booth;
    var name = (company.name).bold();
    var place = company.postalcode + ' ' + company.city;
    var email = 'E-Mail: ' + company.email;
    var tel = 'Tel: ' + company.phone;
    var maps = 'https://maps.google.de/maps?hl=de&q=' + company.street + company.city + 'h&t=&z=14&ie=utf8&iwloc=b&output=embed';
    var logo = 'img/logos/' + id + '.png';
    var url = 'https://' + company.website;
    var persons = company.contactpersons;

    $('#name').html(name);
    $('#name_address').html(company.name)
    $('#booth').html(booth);
    $('#street').html(replaceletter(company.street));
    $('#place').html(place);
    $('#email').html(email);
    $('#tel').html(tel);
    $('#maps').attr("src", maps);
    $('#logo').attr("src", logo);
    $('#description').html(company.description);
    $('#website').attr("href", url);
    $('#video').attr("src", company.video)
    Object.keys(persons).forEach(key => { append_persons(persons[key], key) });
});

function append_persons(array, key) {

    var person = array;
    var maincontainer = 'person' + key;
    var imageid = 'image' + key;
    var image = 'person' + key + '.jpg';
    var infocontainer = 'infoperson' + key;
    $('#persons').append(' <div id="' + maincontainer + '" class="col-xl-6 mt-2"></div>');
    $('#' + maincontainer).append('<div id="' + imageid + '" class="col-xl-4"></div> ');
    $('#' + imageid).append('<img src="img/persons/' + image + '" class=" float-left rounded  d-block" alt="..." height="282px" width="188px"></img>');
    $('#' + maincontainer).append('<div id="' + infocontainer + '" class="col-xl-8 rounded  d-block"></div>');
    $('#' + infocontainer).append('<p class="person"><b>' + person.firstname + ' ' + person.lastname + '</b></p>');
    $('#' + infocontainer).append('<p class="person">' + person.jobdescription + '</p>');
    $('#' + infocontainer).append('<p class="person">' + person.email + '</p>');
    $('#' + infocontainer).append('<p class="person">' + person.phone + '</p>');
}


function getCompany(id) {
    var url = 'https://lehrmesse.ch/api/company/?id=' + id;
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

function replaceletter(string) {
    if (string.includes('ue')) {
        string = string.replace('ue', '&uuml;');
        return string;
    } else if (string.includes('ae')) {
        string = string.replace('ae', '&auml;');
        return string;
    } else if (string.includes('oe')) {
        string = string.replace('oe', '&ouml;');
        return string;
    } else if (string.includes('Oe')) {
        string = string.replace('Oe', '&Ouml;');
        return string;
    } else if (string.includes('Ae')) {
        string = string.replace('Ae', '&Auml;');
        return string;
    } else if (string.includes('Ue')) {
        string = string.replace('Ue', '&Uuml;');
        return string;
    }
}