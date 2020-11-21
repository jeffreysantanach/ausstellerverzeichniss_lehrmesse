function getCompany() {
    var result = runGETRequest('https://lehrmesse.ch/api/company/?id=2');
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