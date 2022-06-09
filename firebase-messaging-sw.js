importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
     apiKey: "AIzaSyCIMGfc2QcEPlr0GlSWJ_ZTFMSjbFDAqOc",
     authDomain: "bokebidesk.firebaseapp.com",
     databaseURL: "https://allm-bda05.firebaseio.com",
     projectId: "bokebidesk",
     storageBucket: "bokebidesk.appspot.com",
     messagingSenderId: "871010850613",
     appId: "1:871010850613:web:5a1cde0fb989bff0f79e7c",
});

const messaging = firebase.messaging();

self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});