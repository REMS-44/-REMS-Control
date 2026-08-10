REMS Control v4.0.5 — фото статей без Firebase Storage

Замінити:
- app.js
- index.html

Що змінилось:
- обкладинки і фото всередині «Зустрічей із індустрією» стискаються в браузері;
- фото зберігаються в Firestore collection rems_industry_media;
- у статті зберігається коротке посилання firestore-media://...
- відео як і раніше потребує URL/Storage;
- студентів, проєкти, календар і розклад ця версія не змінює.

Для Firestore Rules додати:
match /rems_industry_media/{mediaId} {
  allow read: if true;
  allow write: if request.auth != null;
}
