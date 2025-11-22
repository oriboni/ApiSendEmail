const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.listen(port, () => console.log(`Listening on port ${port}`));

const transporterBase = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAILSMTP,
        pass: process.env.PASSWORDSMTPAPI,
    },
});

app.post("/sendEmail", async (req, res) => {
    try {
        const { toEmail, subject, text } = req.body;

        const mailOptions = {
            from: process.env.EMAILSMTP,
            to: toEmail,
            subject: subject,
            text: text,
        };

        transporterBase.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Ошибка отправки:", error);
            } else {
                console.log("Письмо отправлено:", info.messageId);
            }
        });

        res.status(201).json({ text: "All good" });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.post("/sendEmail/cc", async (req, res) => {
    try {
        const { toEmail, subject, text, copyEmail } = req.body;

        const mailOptions = {
            from: process.env.EMAILSMTP,
            to: toEmail,
            subject: subject,
            cc: copyEmail,
            text: text,
        };

        transporterBase.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Ошибка отправки:", error);
            } else {
                console.log("Письмо отправлено:", info.messageId);
            }
        });

        res.status(201).json({ text: "All good" });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.post("/sendEmail/bcc", async (req, res) => {
    try {
        const { toEmail, subject, text, copyEmail } = req.body;

        const mailOptions = {
            from: process.env.EMAILSMTP,
            to: toEmail,
            subject: subject,
            bcc: copyEmail,
            text: text,
        };

        transporterBase.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Ошибка отправки:", error);
            } else {
                console.log("Письмо отправлено:", info.messageId);
            }
        });

        res.status(201).json({ text: "All good" });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.post("/sendEmail/html", async (req, res) => {
    try {
        const { toEmail, subject, text, html } = req.body;

        const mailOptions = {
            from: process.env.EMAILSMTP,
            to: toEmail,
            subject: subject,
            text: text,
            html: html,
        };

        transporterBase.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Ошибка отправки:", error);
            } else {
                console.log("Письмо отправлено:", info.messageId);
            }
        });

        res.status(201).json({ text: "All good" });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});
