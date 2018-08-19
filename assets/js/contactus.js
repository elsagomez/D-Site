var config = {
    apiKey: "AIzaSyBC_RyyJHImTK-UwvIKz_UTLetPyaTXDRQ",
    authDomain: "dvmcontactus.firebaseapp.com",
    databaseURL: "https://dvmcontactus.firebaseio.com",
    projectId: "dvmcontactus",
    storageBucket: "dvmcontactus.appspot.com",
    messagingSenderId: "323233305109"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").click(function(event) {
    event.preventDefault();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val();



    var newContact = {
        name: name,
        phone: phone,
        email: email,
        message: message,
       

    }

    database.ref().push(newContact);




});
