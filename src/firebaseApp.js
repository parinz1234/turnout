import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDtHoHCxsjbcHiFJSpqIPoINreOf0a5P1c',
  authDomain: 'turnout-8c463.firebaseapp.com',
  databaseURL: 'https://turnout-8c463.firebaseio.com',
  projectId: 'turnout-8c463',
  storageBucket: '',
  messagingSenderId: '801346065769'
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')