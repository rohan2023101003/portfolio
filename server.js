// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `New message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.redirect('/message-sent');
    } catch (error) {
        console.error('Error while sending email:', error);
        res.status(500).send('Failed to send the message, please try again later.');
    }
});

app.get('/message-sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'message-sent.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
