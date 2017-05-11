var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.name = functions.database.ref('/users/{userKey}/items/{itemKey}/done').onWrite((event) => {
  const done = event.data.val();
  if (done) {
    const date = new Date();
    return event.data.ref.parent.child('date_done').set(date.toISOString());
  } else {
    return event.data.ref.parent.child('date_done').remove();
  }
});
