const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/modules', express.static('node_modules'));

app.listen(3000);