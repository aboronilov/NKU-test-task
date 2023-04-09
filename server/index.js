const ws = require('ws');
const mqtt = require('mqtt');
const dotenv = require('dotenv')

const server = new ws.Server({ port: 5000 });
server.on('connection', onConnect);

dotenv.config()
const client = mqtt.connect(process.env.BROKER_URL);
const topic = 'topic/indicator';
let currentPercent = '50';

client.on('connect', () => {
    if (client.connected === true) {
        console.log('Connected successfully')
        client.publish(topic, currentPercent);
    }
    client.subscribe(topic);
});

client.on('error',(error) => {
    console.error(error);
    process.exit(1);
});

function onConnect(wsClient) {
    wsClient.send(currentPercent);
    wsClient.on('message', function(messageAsString) {
        currentPercent = JSON.parse(messageAsString).toString();
        client.publish(topic, currentPercent)
    })
    client.on('message', (topic, percent) => {
        wsClient.send(JSON.parse(percent));
    });
}