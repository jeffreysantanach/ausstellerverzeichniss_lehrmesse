$(document).ready(function() {
    var id = findGetParameter("id");
    var company = getCompany(id);



    var booth = 'Stand: ' + company.booth;
    var name = (company.name).bold();
    var place = company.postalcode + ' ' + company.city;
    var email = 'E-Mail: ' + company.email;
    var tel = 'Tel: ' + company.phone;
    var maps = 'https://maps.google.de/maps?hl=de&q=' + company.street + company.city + 'h&t=&z=14&ie=utf8&iwloc=b&output=embed';
    var logo = 'img/logos/' + id + '.png';
    var url = 'https://' + company.website;
    var persons = company.contactpersons;
    var apprenticeships = company.apprenticeships;

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
    Object.keys(apprenticeships).forEach(key => { append_apprenticeship(apprenticeships[key], key) });
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

function append_apprenticeship(array, key) {

    var apprenticeship = array;
    var accordion = 'apprenticeships';
    var card = 'card' + key;
    var heading = 'heading' + key;
    var title = 'title' + key;
    var collapse = 'collapse' + key;
    var cardbody = 'card' + key;

    $('#apprenticeships').append('<div class="card" id="' + card + '"></div> ');
    $('#' + card).append(' <div class="card-header" id="' + heading + '">');
    $('#' + heading).append('<h2 class="mb-0" id="' + title + '"></h2>');
    $('#' + title).append('<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#' + collapse + '" aria-expanded="false" aria-controls="' + collapse + '">' + apprenticeship.name + '</button>');
    $('#' + card).append('<div id="' + collapse + '" class="collapse" aria-labelledby="' + heading + '" data-parent="#' + accordion + '">');
    $('#' + collapse).append('<div class="card-body" id="' + cardbody + '" >' + apprenticeship.description + ' </div>');
}