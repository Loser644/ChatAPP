--===================================
--    🗄️database: if not exists;
--===================================

CREATE DATABASE IF NOT EXISTS codecove_db;

USE codecove_db;

--===================================
--   🧑‍💻Create the users table if not exists;
--===================================

CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    username VARCHAR(50) NOT NULL UNIQUE CHECK (LENGTH(username) > 0),
    email VARCHAR(100) NOT NULL UNIQUE CHECK (LENGTH(email) > 0),
    password VARCHAR(255) NOT NULL CHECK (LENGTH(password) > 0),
    avatar VARCHAR(255) DEFAULT '/Images/Avtar/default.png',
    bio VARCHAR(100) DEFAULT 'Stay! Ahead, Follow the Revolution',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
