var app_url = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com";
var access_token;
var fullPath;
function confirm() {
    var studentID = $(".idcheck").val();
    console.log(studentID);
    //if((studentID) == 4) {
    //    window.location.replace("teachers.html");
    //}
    //window.location.replace("error.html");
    $.post(app_url + "/api/login", {"student_id": studentID.toString()}, function (data) {
        access_token = data["access_token"];
        console.log(data);
        window.location.href = "/teachers.html?access_token=" + access_token;
    }).fail(function (data) {
        console.log(data)
    });
}
app.initialize();


for (i=0;i<studentid.length;i++) {
if (isNaN(studentid[i]) == false) {
    window.location.replace("teacherlist.html");
     access_token = "gkjdrhso";
    console.log(access_token);
}
window.location.replace("error.html");
}