const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const GOALSCORERS = {
    first: {
        name: "Cristiano Ronaldo",
        "years-in-club": "2009-2018",
        "total-goals": 451,
        appearances: 438,
    },
    second: {
        name: "Raúl González",
        "years-in-club": "1994–2010",
        "total-goals": 323,
        appearances: 741,
    },
    third: {
        name: "Alfredo Di Stéfano",
        "years-in-club": "1953–1964",
        "total-goals": 308,
        appearances: 396
    },
    unknow: {
        name: "unknow",
        "years-in-club": "unknow",
        "total-goals": null,
        appearances: null
    }
}

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server started in the PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get(`/api/rm-goalscorers`, (req, res) => {
    res.json(GOALSCORERS);
});

app.get('/api/rm-goalscorers/:position', (req, res) => {
    const pos = req.params.position.toLowerCase();
    if(!(pos in GOALSCORERS)) res.json(GOALSCORERS.unknow);
    res.json(GOALSCORERS[pos]);
});