var currentFilterdJobs = [];
var categoryFlag = 0;
var companyFlag = 0;
var cityFlag = 0;
$('.job-item').parent('div').show(); //intially all rows will be shown

//////////////// filtering

// $('#categoryFilter').change(function() {
//     if (categoryFlag && companyFlag && cityFlag)
//         currentFilterdJobs = [];
//     filterCategory();
// });

// $('#companyFilter').change(function() {
//     if (categoryFlag && companyFlag && cityFlag)
//         currentFilterdJobs = [];
//     filterCompany();
// });

// $('#cityFilter').change(function() {
//     if (categoryFlag && companyFlag && cityFlag)
//         currentFilterdJobs = [];
//     filterCity();
// });


$('.filter').change(function() {

    if ($("#categoryFilter").val() == 0 && $("#companyFilter").val() == 0 && $("#cityFilter").val() == 0) {
        currentFilterdJobs = [];
    }


    switch ($(this).attr("id")) {
        case $("#categoryFilter").attr("id"):
            filterCategory();
            break;

        case $("#companyFilter").attr("id"):
            filterCompany();
            break;

        case $("#cityFilter").attr("id"):
            filterCity();
            break;

        default:
            break;
    }
});




function filterCategory() {
    $('.job-item').parent('div').hide(); //hide all rows
    var categoryValue = $('#categoryFilter').val();


    //traversing each row one by one
    $('.job-item .job-category').each(function() {
        var textComp = $(this).filter('.job-category').text();


        if (categoryValue == 0) { //if no value then display row
            categoryFlag = 1;
        } else if (categoryValue == textComp) {
            categoryFlag = 1; //if value is same display row
        } else {
            categoryFlag = 0;
        }



        if (categoryFlag) {
            $(this).parentsUntil('.job-item').get(-1)
                .parentNode.parentNode.style.display = "block"; //displaying row which satisfies all conditions
            currentFilterdJobs.push($(this).parentsUntil('.job-item').get(-1).parentNode.parentNode);

        }

    });
}

function filterCompany() {
    $('.job-item').parent('div').hide(); //hide all rows
    var companyValue = $('#companyFilter').val();


    //traversing each row one by one
    $('.job-item .job-company').each(function() {
        var textComp = $(this).filter('.job-company').text();


        if (companyValue == 0) { //if no value then display row
            companyFlag = 1;
        } else if (companyValue == textComp) {
            companyFlag = 1; //if value is same display row
        } else {
            companyFlag = 0;
        }



        if (companyFlag) {
            $(this).parentsUntil('.job-item').get(-1)
                .parentNode.parentNode.style.display = "block"; //displaying row which satisfies all conditions
            currentFilterdJobs.push($(this).parentsUntil('.job-item').get(-1).parentNode.parentNode);

        }

    });
}

function filterCity() {
    $('.job-item').parent('div').hide(); //hide all rows

    var cityValue = $('#cityFilter').val();

    $('.job-item .job-location').each(function() {

        var textCity = $(this).filter('.job-location').text();

        if (cityValue == 0) { //if no value then display row
            cityFlag = 1;
        } else if (cityValue == textCity) {
            cityFlag = 1; //if value is same display row
        } else {
            cityFlag = 0;
        }


        if (cityFlag) {
            $(this).parentsUntil('.job-item').get(-1)
                .parentNode.parentNode.style.display = "block"; //displaying row which satisfies all conditions
            currentFilterdJobs.push($(this).parentsUntil('.job-item').get(-1).parentNode.parentNode);

        }

    });
}