'use strict';

var firebase = require("firebase");
firebase.initializeApp({
    "appName": "Quiver Two Node Client Demo",
    "serviceAccount": "./service-account.json",
    "authDomain": "quiver-two.firebaseapp.com",
    "databaseURL": "https://quiver-two.firebaseio.com/",
    "storageBucket": "quiver-two.appspot.com"
});