const express = require('express');

//Create an app
const app = express();

app.post('/rest/webhooks/createIssue/issueId/:issueId', (req, res) => {
    res.send('request was ' +  req.params.issueId);
    console.log(req.params);
    console.log(req);
    console.log("====");
});

//Listen port
const PORT = 8082;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
