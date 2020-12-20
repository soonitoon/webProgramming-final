require('dotenv').config();

module.exports = {
    IS_DEV: process.env.NODE_ENV === 'development',
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    MONGO_URL: process.env.MONGO_URL
};