importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
//너무 최신버전은 에러난다. 나중에 상위버전이 안정화되면 사용해야할 듯함.
// importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

firebase.initializeApp({
     apiKey: "AIzaSyCIMGfc2QcEPlr0GlSWJ_ZTFMSjbFDAqOc",
     authDomain: "bokebidesk.firebaseapp.com",
     databaseURL: "https://allm-bda05.firebaseio.com",
     projectId: "bokebidesk",
     storageBucket: "bokebidesk.appspot.com",
     messagingSenderId: "871010850613",
     appId: "1:871010850613:web:5a1cde0fb989bff0f79e7c",
     measurementId: "G-SY6YMK0K8T"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
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
            return registration.showNotification("새로운 메세지");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();

    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (clients.openWindow)
        return clients.openWindow('/');
    }));
    

     alert('notification received: ', event);
     console.log('notification received: ', event);
});