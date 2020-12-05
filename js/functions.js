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