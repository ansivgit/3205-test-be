# Test task for 3205
##  back-end part

### TASK
Напишите приложение с одной страницей, на котором находится форма с двумя полями:
- email (обязательное),
- number (опциональное),
- кнопка submit;

При нажатии на submit запрос уходит на бек где нужно в JSON найти подходящих под поисковый запрос пользователей, отобразить найденные данные на клиенте под формой.

Условия:
- нужно на беке добавить задержку обработки запроса в 5 секунд (имитация долгой обработки ответа). При повторном запросе с фронта, отменять прошлый запрос.
- обязательная валидация полей email и number. Можно сделать либо на фронте либо на беке, будьте готовы объяснить выбранный подход
- на фронте на поле number нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. например 22-11-22, 83-03-47

Тех. требования
- фронт react или vue (типизация на выбор)
- бек nodejs (типизация обязательна)
- библиотеки на ваше усмотрение
- деплой не обязателен, подойдёт и Readme с инструкцией.

### Tech stack:

For this project BE part Node v.18.15.0 and Express v.4.18.2 were used. Also used:
- typescript v. 5.0.2
- nodemon v. 2.0.22,
- esbuild v.0.17.15,
- eslint v. 8.36.0,
- prettier v. 2.8.4,

To check the implementation:
1. Clone the repos for FE and BE parts.
2. Run dependency installation
```
npm install
```
3. Run BE DEV mode with the command:
```
npm run server
```
4. For BE PROD mode use the command:
```
npm run build
node ./dist/index.js
```
5. Run FE part of the project - [FE part task 3205](https://github.com/ansivgit/3205-test-fe).
