/**
 * Created by h205admin on 5/30/17.
 */
$.getJSON('0.0.0.0:4000/api/teachers', {}, function (data) {
    for(i=0;i<data.length;i++) {
        teacherlist.push(data[i]);
        console.log(teacherlist);
    }
});



var teacherlist = [];
//for (var j=0; j < data.length; j++) {
// teacherlist +
//}
function appendTeachers() {
    console.log(data.id);
    for (var i = 0; i < teacherlist.length; i++) {
        $('#table').append("<li><a href='" + teacherlist[i] + ".html'></a></li>")
    }
}



function willisatard() {
    $.post("http://0.0.0.0:4000/api/teachers", {
        id: 69,
        name: "ALBINSON",
        subject: "NOTHING"
    }, function () {
    }, 'json')
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