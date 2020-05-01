import firebase from 'firebase';

// Firebase Authentication Config

const firebaseConfig = {
    apiKey: "AIzaSyC_IBAEMiBLSe3uaMRHvK6C5AVxYmVbV60",
    authDomain: "cit412-noaschep-blackhole.firebaseapp.com",
    databaseURL: "https://cit412-noaschep-blackhole.firebaseio.com",
    projectId: "cit412-noaschep-blackhole",
    storageBucket: "cit412-noaschep-blackhole.appspot.com",
    messagingSenderId: "228023333056",
    appId: "1:228023333056:web:f188b9a376d628726efd25"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;