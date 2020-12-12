/**
 * This javascript files stores common global functions which are used in different javascript files. 
 */

function getCompanies() {
    /**
     * Runs an API request to get every company
     * @return {object} returns an object which includes the companies
     * 
     */
    var url = 'https://lehrmesse.ch/api/companies/';
    var result = runGETRequest(url);
    return result;

}


function getCompany(id) {
    /**
     * Runs an GET request to get a specific company
     * @param {number} id Unique identifier of the company
     * @return {object} returns an object with information about the company
     * 
     */
    var url = 'https://lehrmesse.ch/api/company/?id=' + id;
    var result = runGETRequest(url);
    return result;

}

function getCompanybybooth(booth) {
    /**
     * Runs an GET request to get the company at a specific booth. 
     * @param {number} booth booth number 
     * @return {object} returns an object with the name and the id of the company.
     * 
     */
    var url = 'https://lehrmesse.ch/api/booth/?booth=' + booth;
    var result = runGETRequest(url);
    return result;

}

function runGETRequest(uri) {
    /**
     * Execute an GET request to a specific API and parse the data back.
     * @param {number} uri URI of the API
     * @return {object} returns the result as an object 
     * 
     */
    var data = [];
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", uri, false); // false for synchronous request
    xmlHttp.send(null);
    data = JSON.parse(xmlHttp.responseText);
    return data;
}

function findGetParameter(parameterName) {
    /**
     * Extract parameters from URI
     * @param {string} parameterName Name of the parameter
     * @return {object} returns the value of the parameter
     * 
     */
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
    /**
     * Ensures the correct display of umlauts
     * @param {string} parameterName Name of the parameter
     * @return {object} returns the value of the parameter
     * 
     */
    string = string.replaceAll('ue', '&uuml;');
    string = string.replaceAll('ae', '&auml;');
    string = string.replaceAll('oe', '&ouml;');
    string = string.replaceAll('Oe', '&Ouml;');
    string = string.replaceAll('Ae', '&Auml;');
    string = string.replaceAll('Ue', '&Uuml;');
    return string;

}