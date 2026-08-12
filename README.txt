REMS Control v4.2 — PERSONAL STUDENT SCHEDULES

Замінити у репозиторії REMS-Control:
- app.js
- index.html
- styles.css (якщо є в архіві)

Що з'явиться:
- нова вкладка «Особисті розклади»
- для кожного студента — унікальне особисте посилання
- кнопки «Відкрити» та «Копіювати посилання»
- особисте посилання також є в картці студента
- персональний розклад оновлюється після змін у REMS Control
- студент нічого не може редагувати

Нова Firestore collection:
rems_student_schedules

Потрібне правило Firestore:
match /rems_student_schedules/{scheduleId} {
  allow read: if true;
  allow write: if request.auth != null;
}
