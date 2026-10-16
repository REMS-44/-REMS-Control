// REMS Control v49.4.64
// Lightweight push service worker. Firebase obtains the token in the page;
// this worker only receives the Web Push event and shows the notification.

const REMS_SW_VERSION = '49.4.64';

function remsPayload(event) {
  let raw = {};
  try {
    raw = event.data ? event.data.json() : {};
  } catch (_) {
    try { raw = { body: event.data ? event.data.text() : '' }; } catch (_) { raw = {}; }
  }

  const fcm = raw && raw.FCM_MSG && typeof raw.FCM_MSG === 'object' ? raw.FCM_MSG : {};
  const data = raw && raw.data && typeof raw.data === 'object'
    ? raw.data
    : (fcm.data && typeof fcm.data === 'object' ? fcm.data : {});
  const notification = raw && raw.notification && typeof raw.notification === 'object'
    ? raw.notification
    : (fcm.notification && typeof fcm.notification === 'object' ? fcm.notification : {});
  const fcmOptions = raw && raw.fcmOptions && typeof raw.fcmOptions === 'object'
    ? raw.fcmOptions
    : (fcm.fcmOptions && typeof fcm.fcmOptions === 'object' ? fcm.fcmOptions : {});

  return {
    title: String(data.title || notification.title || 'Режисерська лабораторія'),
    body: String(data.body || notification.body || raw.body || 'Нове повідомлення'),
    url: String(data.url || data.link || fcmOptions.link || './index.html'),
    eventId: String(data.eventId || data.messageId || raw.messageId || raw['google.message_id'] || 'update')
  };
}

function remsScopedUrl(rawUrl) {
  const scope = new URL(self.registration.scope);
  let url;
  try { url = new URL(rawUrl || './index.html', scope); }
  catch (_) { url = new URL('./index.html', scope); }

  if (url.origin !== scope.origin) return new URL('./index.html', scope);

  // Older Cloud Function versions used /REMS-Control/ while GitHub Pages is /-REMS-Control/.
  // Always force REMS links back into the active service-worker scope.
  if (url.pathname.includes('/REMS-Control/') || url.pathname.includes('/-REMS-Control/')) {
    const file = /\/lab\.html$/i.test(url.pathname) ? 'lab.html' : 'index.html';
    url.pathname = scope.pathname.replace(/\/?$/, '/') + file;
  }
  return url;
}

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', event => {
  const payload = remsPayload(event);
  const url = remsScopedUrl(payload.url);
  event.waitUntil(self.registration.showNotification(payload.title, {
    body: payload.body,
    data: { url: url.href, eventId: payload.eventId, version: REMS_SW_VERSION },
    tag: 'rems-lab-' + payload.eventId,
    renotify: false
  }));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = remsScopedUrl(event.notification && event.notification.data && event.notification.data.url
    ? event.notification.data.url
    : './index.html').href;

  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const same = windows.find(client => {
      try { return new URL(client.url).pathname === new URL(url).pathname; }
      catch (_) { return false; }
    });
    if (same) {
      if (same.navigate) await same.navigate(url);
      await same.focus();
      return;
    }
    await self.clients.openWindow(url);
  })());
});
