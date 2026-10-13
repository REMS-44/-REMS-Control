// REMS Directing Lab background push registration.
import { getMessaging, getToken, isSupported } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-functions.js";

function pushError(stage, err) {
  const code = String(err?.code || "").replace(/^functions\//, "");
  const msg = String(err?.message || err || "Невідома помилка");
  const detail = code && !msg.toLowerCase().includes(code.toLowerCase()) ? `${code}: ${msg}` : msg;
  const out = new Error(`${stage}: ${detail}`);
  out.code = err?.code || "";
  out.cause = err;
  return out;
}

export async function enableLabPush(firebaseApp, payload) {
  if (!window.isSecureContext || !("serviceWorker" in navigator) || !("Notification" in window)) {
    throw Error("Підготовка: push потребує HTTPS і браузер із підтримкою сповіщень.");
  }

  let supported = false;
  try { supported = await isSupported(); }
  catch (e) { throw pushError("Перевірка браузера", e); }
  if (!supported) throw Error("Перевірка браузера: цей браузер не підтримує Firebase Push.");

  const vapidKey = String(window.REMS_LAB_VAPID_PUBLIC_KEY || "").trim();
  if (!vapidKey) throw Error("VAPID: публічний ключ не налаштовано.");

  let permission;
  try { permission = await Notification.requestPermission(); }
  catch (e) { throw pushError("Дозвіл браузера", e); }
  if (permission !== "granted") throw Error("Дозвіл браузера: сповіщення не дозволені.");

  let registration;
  try {
    registration = await navigator.serviceWorker.register('./service-worker.js?v=49.4.55', {scope:'./', updateViaCache:'none'});
    try { await registration.update(); } catch (_) {}
    registration = (await navigator.serviceWorker.ready) || registration;
  } catch (e) {
    throw pushError("Service Worker", e);
  }

  let token;
  try {
    token = await getToken(getMessaging(firebaseApp), {
      vapidKey,
      serviceWorkerRegistration: registration
    });
  } catch (e) {
    throw pushError("FCM token", e);
  }
  if (!token) throw Error("FCM token: Firebase не видав токен цьому пристрою.");

  try {
    const register = httpsCallable(getFunctions(firebaseApp, 'europe-west1'), 'registerDirectingLabPush');
    const result = await register({...payload, token});
    const data = result?.data || {};
    if (data.ok !== true) {
      const stage = String(data.stage || 'Серверна реєстрація');
      const code = String(data.code || '').trim();
      const error = String(data.error || 'Сервер не підтвердив push-підписку');
      throw new Error(`${stage}: ${code ? code + ': ' : ''}${error}`);
    }
  } catch (e) {
    throw pushError("Реєстрація в REMS", e);
  }

  return true;
}
