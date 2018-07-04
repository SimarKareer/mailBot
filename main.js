'use strict';

var firebase = require("firebase");
firebase.initializeApp({
    "appName": "MailBot",
//    "serviceAccount": "./service-account.json",
    "databaseURL": "https://newagent-f4967.firebaseio.com/"
});

var ref = firebase.app().database().ref();

ref.on("child_changed", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });