
var sliderval = 0;
var baseUrl = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com";

function loaded() {
    $("#slider").slider({
        value: 0,
        min: -5,
        max: 5,
        step: 1,
        slide: function (event, ui) {
            $("#amount").val("Rating: " + ui.value)
            sliderval = ui.value
        }
    });
}

function submit() {
    var tid = param("teacherid")
    $.ajax({
        url: baseUrl + "/api/teachers/" + tid + "/roasts",
        type: "POST",
        dataTypd: "json",
        data: { roast: {
            rating: sliderval,
            comment: $("#comment").val()
        }}
    })
        .done(function () {
            window.location.href = "teacherprofile.html?id=" + tid
        })
        .fail(function () {
            console.log(this)
        })
}

function param(id) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(id);
}