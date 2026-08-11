REMS Control v4.1.3 — VIDEO UPLOAD + PROGRESS

У репозиторії REMS-Control замінити ТІЛЬКИ:
- app.js
- index.html

Що змінено:
- відео завантажується напряму у Firebase Storage;
- використовується resumable upload для великих файлів;
- видно реальний прогрес: 1%, 25%, 70%, 100%;
- MOV тепер видно у виборі файлів;
- приймаються video/* + MOV, MP4, M4V, WebM, AVI, MKV;
- для сайту рекомендований MP4 (H.264), бо не всі браузери відтворюють MOV/AVI/MKV;
- фото продовжують зберігатися у Firestore як раніше;
- якщо Storage забороняє запис, редактор покаже конкретну помилку замість безкінечного очікування.

Після заміни:
Commit to main -> Push origin -> Ctrl+F5.

ВАЖЛИВО:
Якщо прогрес одразу покаже помилку Firebase Storage / unauthorized,
тоді проблема вже не у файлі й не у форматі — треба налаштувати Firebase Storage Rules / доступ.
