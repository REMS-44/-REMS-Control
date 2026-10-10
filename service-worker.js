// Firebase Cloud Messaging service worker, no offline page cache.
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyDKpQYuykXwfmkBxNBUhw317Yg72gZNPic',authDomain:'rems-control.firebaseapp.com',projectId:'rems-control',messagingSenderId:'478170069073',appId:'1:478170069073:web:b4f9df1eb34754bdba2070'});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{
 const data=payload.data||{};
 const url=new URL(data.url||'./index.html',self.registration.scope);
 if(url.origin!==self.location.origin)return;
 self.registration.showNotification(data.title||'Режисерська лабораторія',{body:data.body||'Нове повідомлення',icon:'./icons/icon-192.png',data:{url:url.href},tag:'rems-lab-'+(data.eventId||'update')});
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();const url=event.notification.data?.url||new URL('./index.html',self.registration.scope).href;
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async clients=>{
  const match=clients.find(c=>c.url.split('#')[0]===url.split('#')[0]);if(match){await match.focus();if(match.navigate)await match.navigate(url);return}await self.clients.openWindow(url);
 }));
});
