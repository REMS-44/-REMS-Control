REMS-Control v46.7 - Direct Message Jump

# REMS-Control v46.6

Точкове виправлення переписки і студентських повідомлень.

- Переписка відкривається стабільно і не створює кілька модальних вікон одночасно.
- Кнопка «Переписка» є під кожним робочим пунктом студента, навіть якщо повідомлень ще немає.
- Плашка з уже наявною перепискою клікабельна вся, не лише маленька кнопка.
- Нові повідомлення викладача показуються студенту окремим внутрішнім списком із назвою конкретного пункту і фрагментом повідомлення.
- Відкриття конкретної переписки позначає прочитаним саме цей пункт, а не всі коментарі розділу.
- Викладацьке модальне вікно переписки також отримало захист від дублювання та помилок відкриття.
- Firebase Rules змінювати не потрібно.


- Student notification cards jump to the exact item.
- Teacher activity cards already jump to the exact item and browser notifications now do too.
- Clicking a message bubble in either dialogue returns to the related item.
- Direct target is highlighted briefly.
