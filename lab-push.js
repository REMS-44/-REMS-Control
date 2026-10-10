// REMS Directing Lab push registration (explicit permission only).
import { getMessaging, getToken, isSupported } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-functions.js";
export async function enableLabPush(firebaseApp, payload) {
  if (!window.isSecureContext || !("serviceWorker" in navigator) || !("Notification" in window)) throw Error("Push потребує HTTPS і браузер із підтримкою сповіщень.");
  if (!(await isSupported())) throw Error("Цей браузер не підтримує Firebase Push. На iOS додайте сайт на головний екран.");
  const vapidKey=String(window.REMS_LAB_VAPID_PUBLIC_KEY||"").trim();
  if (!vapidKey) throw Error("Не налаштовано публічний VAPID-ключ Firebase. Див. PUSH-SETUP.md.");
  const permission=await Notification.requestPermission();
  if(permission!=="granted") throw Error("Дозвіл на сповіщення не надано.");
  const registration=await navigator.serviceWorker.register('./service-worker.js', {scope:'./'});
  await navigator.serviceWorker.ready;
  const token=await getToken(getMessaging(firebaseApp),{vapidKey,serviceWorkerRegistration:registration});
  if(!token) throw Error("FCM не видав токен цьому пристрою.");
  const register=httpsCallable(getFunctions(firebaseApp,'europe-west1'),'registerDirectingLabPush');
  await register({...payload,token});
  return true;
}
