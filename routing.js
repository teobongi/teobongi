const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/chi-siamo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chi-siamo.html'));
});

app.get('/cosa-facciamo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cosa-facciamo.html'));
});

app.get('/contatti', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contatti.html'));
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

const pages = {
    'home.html': `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <style>
        nav ul { list-style-type: none; padding: 0; background-color: #333; overflow: hidden; }
        nav ul li { float: left; }
        nav ul li a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }
        nav ul li a:hover { background-color: #575757; }
    </style>
</head>
<body>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi Siamo</a></li>
        <li><a href="/cosa-facciamo">Cosa Facciamo</a></li>
        <li><a href="/contatti">Contatti</a></li>
    </ul>
</nav>
<h1>Home</h1>
<p>Benvenuti nella nostra home page!</p>
</body>
</html>`,

    'chi-siamo.html': `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi Siamo</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi Siamo</a></li>
        <li><a href="/cosa-facciamo">Cosa Facciamo</a></li>
        <li><a href="/contatti">Contatti</a></li>
    </ul>
</nav>
<h1>Chi Siamo</h1>
<p>Scopri di più su di noi.</p>
</body>
</html>`,

    'cosa-facciamo.html': `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cosa Facciamo</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi Siamo</a></li>
        <li><a href="/cosa-facciamo">Cosa Facciamo</a></li>
        <li><a href="/contatti">Contatti</a></li>
    </ul>
</nav>
<h1>Cosa Facciamo</h1>
<p>Le nostre attività principali.</p>
</body>
</html>`,

    'contatti.html': `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatti</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/chi-siamo">Chi Siamo</a></li>
        <li><a href="/cosa-facciamo">Cosa Facciamo</a></li>
        <li><a href="/contatti">Contatti</a></li>
    </ul>
</nav>
<h1>Contatti</h1>
<p>Contattaci per maggiori informazioni.</p>
</body>
</html>`
};

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

Object.entries(pages).forEach(([filename, content]) => {
    const filePath = path.join(publicDir, filename);
    fs.writeFileSync(filePath, content);
    console.log(`Aggiornato: ${filename}`);
});
