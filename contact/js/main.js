// Initialize Firebase
var config = {
    apiKey: "AIzaSyCj24bKTlAHjr-gAU-HtRbx_3K7W2XalzM",
    authDomain: "contactform-7c718.firebaseapp.com",
    databaseURL: "https://contactform-7c718.firebaseio.com",
    projectId: "contactform-7c718",
    storageBucket: "contactform-7c718.appspot.com",
    messagingSenderId: "582362724646"
};
firebase.initializeApp(config);

// Reference messages collection

var messagesRef = firebase.database().ref("messages");

// Listen for form submit

$("#contactForm").on("submit", submitForm);

// Submit form

function submitForm(e){
    e.preventDefault();

    // get values
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // save message
    saveMessage(name, email, message);

    // show alert
    $(".alert").show();

    // hide after 3 seconds

    setTimeout(function(){
        $(".alert").hide();
    },3000);

    $("#contactForm").trigger("reset");
}

// function to get form values

function getInputVal(id){
    return $("id");
}

// save msg to firebase

function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}