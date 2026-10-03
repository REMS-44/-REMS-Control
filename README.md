# REMS-Control v43.2 — CLEAN

Компактна робоча версія REMS-Control з «Режисерською лабораторією».

## Основні файли
- `index.html` — REMS-Control (викладацька/адміністративна частина)
- `app.js` — основна логіка REMS-Control
- `lab.html` / `lab.js` / `lab.css` — персональна студентська лабораторія
- `firebase-config.js` — підключення Firebase
- `FIREBASE-RULES-DIRECTING-LAB.txt` — правила, які потрібно додати у Firebase для лабораторії

## Допоміжні модулі
Файли `resume-import-*`, `questionnaire-import-*`, `resume-links-*` залишені, бо їх підключає `index.html` і вони використовуються розділом студентів/резюме.

## Що прибрано
- старі журнали версій `V*.txt`;
- резервні `.bak`;
- `app-OLD.js`;
- старі проміжні `REMS-Control-app-*.js`;
- дубльовані README та історичні патчі.

Це не змінює робочу логіку програми — лише прибирає історичний/службовий баласт з архіву.
