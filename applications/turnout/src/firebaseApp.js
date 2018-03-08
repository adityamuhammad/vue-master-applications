import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCmx5u9F1QAxnK4vrDbtWxdXRDBeN2iDQg",
  authDomain: "turnout-ecac1.firebaseapp.com",
  databaseURL: "https://turnout-ecac1.firebaseio.com",
  projectId: "turnout-ecac1",
  storageBucket: "turnout-ecac1.appspot.com",
  messagingSenderId: "245959422668"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
