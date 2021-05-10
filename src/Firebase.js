import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB22Lkug6awBCQWFlxTHfiDhOdj8LA6oWA",
    authDomain: "sistemainvictus-c4f94.firebaseapp.com",
    databaseURL: "https://sistemainvictus-c4f94.firebaseio.com",
    projectId: "sistemainvictus-c4f94",
    storageBucket: "sistemainvictus-c4f94.appspot.com",
    messagingSenderId: "44316879161",
    appId: "1:44316879161:web:66c3a83d7a6f3823"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;    