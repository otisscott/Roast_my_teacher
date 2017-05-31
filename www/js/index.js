
var app_url = "example.com";


function confirm() {
    var studentid = document.getElementById("idinput").value;
    console.log(studentid);
    if((document.getElementById("idinput").value) == 4) {
        window.location.replace("teacherlist.html");
    }
    window.location.replace("error.html");
}

app.initialize();

// $.post(app_url + "/api/login", {"student_id": studentid}, function (data) {
//     access_token = data["access_token"];
//     console.log(access_token);
// });

//for (i=0;i<studentid.length;i++) {
//if (isNaN(studentid[i]) == false) {
  //  window.location.replace("teacherlist.html");
    // access_token = "gkjdrhso";
  //  console.log(access_token);
//}
//window.location.replace("error.html");
//}
