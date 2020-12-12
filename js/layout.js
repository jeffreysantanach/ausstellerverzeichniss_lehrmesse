$(document).ready(function() {
    $("#logo").hide();
    $('area').on("mousemove", function() {
        var booth = $(this).data('id');
        boothhover(booth);
    });
    $('area').on("click", function() {
        var booth = $(this).data('id');
        boothclick(booth);
    });
});

function boothhover(booth) {
    /**
     * Shows logo of the company at a specific booth
     * @param {number} booth booth number
     * 
     */
    var company = getCompanybybooth(booth);
    if (company != null) {
        var companyid = company.company_id
        var logo = 'img/logos/' + companyid + '.png';
        $('#logo').attr("src", logo);
        $("#logo").show();
    } else {
        $("#logo").hide();
    };


}




function boothclick(booth) {
    /**
     * Opens the profile of the company at the specific booth
     * @param {number} booth booth number
     * 
     */
    var company = getCompanybybooth(booth);
    if (company != null) {
        var companyid = company.company_id
        profile = "profile.html?id=" + companyid;
        window.open(profile, "_self");
        return;
    }

}