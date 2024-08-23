const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp();
}

const db = admin.firestore();

module.exports = async (req, res) => {
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
        res.status(500).send("Internal Server Error");
    }
};
