/**
 * Created by h205admin on 5/30/17.
 */
var app_url = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com";
function appendTeachers() {
    $.getJSON(app_url + "/api/teachers", function (data) {
        var teachers = data["data"];
        console.log(teachers);
        for (var i = 0; i < teachers.length; i++) {
            $('#table').append("<li class='list-group-item'><a href='teacherprofile.html?id=" + teachers[i].id + "'>"+ teachers[i].name + "</a></li>")
        }
    });
}