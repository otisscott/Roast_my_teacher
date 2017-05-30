var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function confirm(studentid) {
    if (isNan(studentid) == false) {
        $.post(url, { "studentID": <student_id:string>})

    }
    console.log("no");
}



app.initialize();








$(document).ready(function() {

//dummy test data - get this from an API
    var y =
        [{"text": 'Go to Index', "url": '#page1'},
            {"text": 'Go to Page 2', "url": '#page2'},
            {"text": 'Go to Page 3', "url": '#page3'},
            {"text": 'Go to Page 4', "url": '#page4'},
            {"text": 'Go to Page 5', "url": '#page5'}];

    for(var i=0; i< y.length; i++) {

        $("#thing1,#thing2,#thing3,#thing4,#thing5").append("<li><a  data-transition='pop' href='" + y[i].url + "'>" + y[i].text + "</a></li>")


    }
.
    $("#thing1,#thing2,#thing3,#thing4,#thing5").listview( "refresh" );


});