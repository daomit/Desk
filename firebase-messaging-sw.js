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

messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});