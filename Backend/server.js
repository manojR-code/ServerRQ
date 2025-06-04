const express = require('express');
const cors = require('cors');
const mailer= require('nodemailer');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: "manoj170520055@gmail.com",
        pass: "qbaf umtj sfbr baht"
    }
});
app.post('/', async (req, res) => { 

    const mailOptions = {
        from:"manoj170520055@gmail.com",
        to: req.body.email,
        subject: 'Hello Bro I am Manoj R Thanks for submitting your details',
        text: 'You can call me on no 7795061842'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent:', info.response+" Email Sent To "+req.body.email+"Description "+req.body.description);
        res.status(200).send('Email sent successfully');
    });
});
app.listen(3000, (err) => { 
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server is running on port 3000');
    }
})
