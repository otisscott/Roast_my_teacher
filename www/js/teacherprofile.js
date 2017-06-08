/**
 * Created by h205p2 on 6/6/17.
 */
var baseUrl = "http://ec2-54-183-163-136.us-west-1.compute.amazonaws.com";

//get the url, get the id from url, add id to /api/teachers/:id/roast
/**window.onload = function {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    noFun(id)
};**/

$(window).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    noFun(id)
});

function noFun(id) {
    $.getJSON(baseUrl + "/api/teachers/" + id + "/roasts", function (data) {
        var roasts = data.data
        for(i=0; i < roasts.length ; i++) {
            comment = roasts[i].comment
            rating = roasts[i].rating
            $("#roasts").append("<li>" + rating + ":" + comment + "</li>")
        }
    })
}
