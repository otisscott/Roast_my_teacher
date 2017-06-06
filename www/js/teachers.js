/**
 * Created by h205admin on 5/30/17.
 */
var app_url = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com"
function appendTeachers() {
    $.getJSON(app_url + "/api/teachers", function (data) {
        var teachers = data["data"]
        console.log(teachers)
        for (var i = 0; i < teachers.length; i++) {

            $('#table').append("<li><a href='teacher.html?id=" + teachers[i].id + "'>"+ teachers[i].name + "</a></li>")
        }

    });
}


function teacher1() {
    window.location.replace("teacherprofile.html");
}

function css(el) {
    var sheets = document.styleSheets, ret = [];
    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector
        || el.msMatchesSelector || el.oMatchesSelector;
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (el.matches(rules[r].selectorText)) {
                ret.push(rules[r].cssText);
            }
        }
    }
    return ret;
}