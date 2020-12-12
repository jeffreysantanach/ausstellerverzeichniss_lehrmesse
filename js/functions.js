function getCompanies() {
    var url = 'https://lehrmesse.ch/api/companies/';
    var result = runGETRequest(url);
    return result;

}


function getCompany(id) {
    var url = 'https://lehrmesse.ch/api/company/?id=' + id;
    var result = runGETRequest(url);
    return result;

}

function getCompanybybooth(booth) {
    var url = 'https://lehrmesse.ch/api/booth/?booth=' + booth;
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


function replacespecialletters(string) {
    string = string.replaceAll('ue', '&uuml;');
    string = string.replaceAll('ae', '&auml;');
    string = string.replaceAll('oe', '&ouml;');
    string = string.replaceAll('Oe', '&Ouml;');
    string = string.replaceAll('Ae', '&Auml;');
    string = string.replaceAll('Ue', '&Uuml;');
    return string;

}