const express = require('express');
const { encoder, decoder } = require('./controllers');

const app = express();
const PORT = 3000;
const HOSTNAME = "127.0.0.1";

app.get('/', (req, res) => {

    const encodeToBase64 = "Hi, i am Prajwal. Nice to Meet You. :)";
    const decodeFromBase64 = "SGksIGkgYW0gUHJhandhbC4gTmljZSB0byBNZWV0IFlvdS4gOik=";

    const result = {
        encodingText: encodeToBase64,
        encodeToBase64: encoder(encodeToBase64),
        decodeFromBase64: decoder(decodeFromBase64)
    }

    res.send(result);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Listening to http://${HOSTNAME}:${PORT}`);
});
