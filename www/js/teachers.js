/**
 * Created by h205admin on 5/30/17.
 */
var app_url = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com";
function appendTeachers() {
    $.getJSON(app_url + "/api/teachers", function (data) {
        var teachers = data["data"];
        console.log(teachers);
        for (var i = 0; i < teachers.length; i++) {
            var name = teachers[i].name;
            console.log(teachers[i].name);
            $('#table').append("<li class='list-group-item justify-content-between'><a href='teacherprofile.html?id=" + teachers[i].id + "' onclick=store('" + name + "')>" + name + "   (" + teachers[i].subject + ")</a><span class='badge badge-primary badge-pill text-right'>" + teachers[i].rating + "</span></li>")
        }
    });
}
function store(name) {
    sessionStorage.name = name;
    console.log(name);
}