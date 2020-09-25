DROP DATABASE IF EXISTS gameplaylist_db;
CREATE DATABASE gameplaylist_db;

\c gameplaylist_db;

DROP TABLE IF EXISTS playlist_games;
DROP TABLE IF EXISTS lists;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id VARCHAR UNIQUE PRIMARY KEY,
    username VARCHAR,
    first_name VARCHAR,
    last_name VARCHAR,
    birthday VARCHAR,
    email VARCHAR,
    profile_picture VARCHAR,
    gender VARCHAR
);

CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    playlist_name VARCHAR,
    playlist_owner VARCHAR REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE playlist_games (
    id SERIAL PRIMARY KEY,
    playlist_id INTEGER REFERENCES playlists(id) ON DELETE CASCADE,
    game_id INTEGER
);