import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    return res.json([
       { name: "Marcelo", cor: "Azul" }
    ])
});

app.listen(3333);