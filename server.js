// server.js

const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/rest/webhooks/createIssue/issueId/:issueId', (req, res) => {
    res.send('request was ' +  req.params.issueId);
    console.log(req)
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
