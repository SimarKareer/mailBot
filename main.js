'use strict';

const ntClient = require('wpilib-nt-client');
const client = new ntClient.Client()

client.start((isConnected, err) => {
    // Displays the error and the state of connection
    console.log({ isConnected, err });
}, 'roborio-2729.local');

var firebase = require("firebase");
firebase.initializeApp({
    "appName": "MailBot",
    //    "serviceAccount": "./service-account.json",
    "databaseURL": "https://newagent-f4967.firebaseio.com/"
});

var ref = firebase.app().database().ref();

ref.on("child_changed", function (snapshot) {
    //client.Assign(snapshot.val(), "unsorted", false) //this bool might need to be true
    console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

