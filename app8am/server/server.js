const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    api = require('./api/user.api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());
app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});