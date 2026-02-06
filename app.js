const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Il mio blog');
});

app.get('/posts', (req, res) => {
    const posts = [
        {
            id: 1,
            titolo: 'Primo post',
            contenuto: 'Contenuto del primo post',
            immagine: "/images/ciambellone.jpeg",
            tags: ['dolce']
        },
        {
            id: 2,
            titolo: 'Secondo post',
            contenuto: 'Contenuto del secondo post',
            immagine: "/images/cracker_barbabietola.jpeg",
            tags: ['salato']
        },
        {
            id: 3,
            title: 'Terzo post',
            contenuto: 'Contenuto del terzo post',
            immagine: "/images/pane_fritto_dolce.jpeg",
            tags: ['buono']
        },
        {
            id: 4,
            titolo: 'Quarto post',
            contenuto: 'Contenuto del quarto post',
            immagine: "/images/pasta_barbabietola.jpeg",
            tags: ['pasta']
        },
        {
            id: 5,
            titolo: 'Quinto post',
            contenuto: 'Contenuto del quinto post',
            immagine: "/images/torta_paesana.jpeg",
            tags: ['torta']
        },

    ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});