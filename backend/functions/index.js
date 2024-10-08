/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.getClubs = functions.https.onRequest(async (req, res) => {
    try {
      const collectionRef = db.collection("users");
    
      const snapshot = await collectionRef.get();
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
    
      res.status(200).json(data);
    } catch (error) {
      console.error("Error getting data from Firestore:", error);
      res.status(500).send("Internal Server Error Occurred");
    }
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
