// config/nodemailer.js

import nodemailer from 'nodemailer';

// Настройка почтового клиента
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // email из .env
        pass: process.env.EMAIL_PASSWORD, // пароль из .env
    },
});

// Экспортируем переменную и transporter
const accountEmail = process.env.EMAIL_USER;

export { transporter, accountEmail };