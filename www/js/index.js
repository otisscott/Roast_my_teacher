
var app_url = "example.com";


function confirm(studentid) {
    for (i=0;i<studentid.length;i++) {
        if (isNan(studentid[i]) == false) {
            // $.post(app_url + "/api/login", {"student_id": studentid}, function (data) {
            //     access_token = data["access_token"];
            //     console.log(access_token);
            // });
            access_token = "gkjdrhso";
            console.log(access_token);
        }

    }
    $.mobile.changePage(#error);
}



app.initialize();