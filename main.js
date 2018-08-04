'use strict';

const ntClient = require('wpilib-nt-client');
const client = new ntClient.Client()
const admin = require('firebase-admin');
const functions = require('firebase-admin');
var serviceAccount = require('../newagent-f4967-f06e512b9e8a.json');

/*
client.start((isConnected, err) => {
    // Displays the error and the state of connection
    console.log({ isConnected, err });
}, 'roborio-2729.local');
*/

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var collec = db.collection('moveRequests');

var observer = collec.onSnapshot(docSnapshot => {
  console.log(`Received doc snapshot: ${docSnapshot}`);
  // ...
}, err => {
  console.log(`Encountered error: ${err}`);
});
