
var app_url = "example.com";


function confirm() {
    var studentid = document.getElementById("idinput").value;
    console.log(studentid);
    for (i=0;i<studentid.length;i++) {
        if (isNaN(studentid[i]) == false) {
            // $.post(app_url + "/api/login", {"student_id": studentid}, function (data) {
            //     access_token = data["access_token"];
            //     console.log(access_token);
            // });
            access_token = "gkjdrhso";
            console.log(access_token);
        }
        window.location.replace("error.html");
    }

}
function goBack() {
    window.history.back();
}
app.initialize();