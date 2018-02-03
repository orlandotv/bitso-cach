const webSocket = require('ws');
const express = require('express');
const app = express();

const bitsoSocket = new webSocket('wss://ws.bitso.com');

bitsoSocket.onopen = function() {
    bitsoSocket.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'trades' }));
    bitsoSocket.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'diff-orders' }));
    bitsoSocket.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'orders' }));
};

bitsoSocket.onmessage = function(message){
    var data = JSON.parse(message.data);

    if (data.type == 'trades' && data.payload) {

    }
    else if (data.type == 'diff-orders' && data.payload) {

    }
    else if (data.type == 'orders' && data.payload) {

    }
};

app.get('/', (req, res) => res.send('Cachorro Hats!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))