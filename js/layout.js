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
    var company = getCompanybybooth(booth);
    if (company != null) {
        var companyid = company.company_id
        profile = "profile.html?id=" + companyid;
        window.open(profile, "_self");
        return;
    }

}