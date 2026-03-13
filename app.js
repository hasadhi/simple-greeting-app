const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));


app.get('/greet', (req, res) => {
    const name = req.query.user;
    res.send(`
        <html>
        <body style="background-color: #1a1a2e; color: white; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
            <div style="background: #16213e; padding: 80px; border-radius: 40px; border: 1px solid #0f3460; text-align: center; width: 500px;">
                <h1 style="color: #a29bfe; font-size: 60px; margin-bottom: 40px;">Hello, ${name}!</h1>
                <a href="/" style="color: #818181; text-decoration: none; font-size: 20px;">Go Back</a>
            </div>
        </body>
        </html>
    `);
});


app.post('/submit', (req, res) => {
    const name = req.body.userName; 
    
    
    res.redirect(`/greet?user=${name}`);
});


app.get('/greet', (req, res) => {
    const name = req.query.user; 
    res.send(`
        <body style="background-color: #1a1a2e; color: white; text-align: center; padding-top: 100px; font-family: sans-serif;">
            <h1 style="color: #a29bfe; font-size: 50px;">Hello, ${name}!</h1>
            <br>
            <a href="/" style="color: #818181; text-decoration: none;">Go Back</a>
        </body>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});