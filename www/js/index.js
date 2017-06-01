var app_url = "example.com";


function confirm() {
    var studentid = document.getElementById("idinput").value;
    console.log(studentid);
    if((document.getElementById("idinput").value) == 4) { //test
        window.location.replace("teacherlist.html");
    }
    window.location.replace("error.html");
}
app.initialize();






//for (i=0;i<studentid.length;i++) {
//if (isNaN(studentid[i]) == false) {
  //  window.location.replace("teacherlist.html");

//}
//window.location.replace("error.html");
//}
