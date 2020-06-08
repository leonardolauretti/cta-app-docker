const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const cors = require('cors');

const port_number = process.env.NODE_PORT || 3030;
const source_dir = './dist';

const app = express();

app.use(cors());
app.use(express.static(path.resolve(source_dir)));
app.use(body_parser.urlencoded({ extended: true }));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(source_dir, 'index.html'));
});

app.listen(port_number, () => {
    console.log(`Express server started: http://localhost:${port_number}`);
    console.log(`Serving content from ${source_dir}`);
});