# Тестовое задание на должность full-stack разработчика

## Техзадание
Необходимо разработать простую программу используя NodeJS + TypeScript + Svelte Kit, которая будет читать значение мощности c MQTT сервера и отправлять новое значение при движении ползунка. Если открыть несколько вкладок в браузере при изменении значения в одном месте оно автоматически будет меняться во всех вкладках. Этот блок необходимо реализовать как отдельный компонент Svelte. MQTT сервер (брокер) используйте Mosquitto Test

## Порядок установки:
```git clone https://github.com/aboronilov/NKU-test-task```

```cd .\server```
```npm install```
Создать файл .env и в него поместить сроку:
```BROKER_URL="mqtt://test.mosquitto.org"```
```node index.js```
Если в консоли вывелось сообщение ```Connected successfully```, значит сервер запущен

```cd .\client```
```npm install```
```npm run dev```
В консоли выведется сообщение, перейти по предложенной ссылке

Если копировать ссылку в несколько вкладок, то значение ползунка остается одинаковым для всех вкладок.

## Технололгии

### Backend

- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [Websocket](https://www.npmjs.com/package/ws)
- [MQTT](https://www.npmjs.com/package/mqtt)

### Frontend

- [Svelte](https://svelte.dev/)