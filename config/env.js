import { config } from 'dotenv';

// Загружаем переменные окружения из .env.local
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    MONGODB_URI,  // Экспортируем переменную MONGODB_URI
    PORT, NODE_ENV, SERVER_URL,
    JWT_SECRET, JWT_EXPIRES_IN,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    EMAIL_PASSWORD,
} = process.env;