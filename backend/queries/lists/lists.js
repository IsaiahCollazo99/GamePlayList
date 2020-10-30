const db = require("../../db/db");

module.exports = {
    createList: async ( req, res, next ) => {
        try {
            const { list_name, list_owner } = req.body;
            const list = await db.one(`
                INSERT INTO lists (list_name, list_owner)
                VALUES ($1, $2)
                RETURNING *
            `, [list_name, list_owner]);

            res.status(200).json({
                status: "OK",
                list,
                message: "Successfuly created list"
            });
        } catch ( error ) {
            next(error);
        }
    },

    addGameToList: async ( req, res, next ) => {
        try {
            const { id } = req.params;
            const { game_id } = req.body;
            
            const listNewGame = await db.one(`
                INSERT INTO list_games (list_id, game_id)
                VALUES($1, $2)
                RETURNING *
            `, [id, game_id]);

            const list = await db.one(`
                SELECT lists.*, users.first_name, users.last_name, users.username, users.profile_picture
                FROM lists
                LEFT JOIN users on lists.list_owner=users.id
                WHERE lists.id=$1
            `, listNewGame.list_id);

            const listGames = await db.any(`
                SELECT * FROM list_games
                WHERE list_id=$1
            `, list.id);

            list.games = listGames;

            res.status(200).json({
                status: "OK",
                list,
                message: "Successfuly added game"
            })
        } catch ( error ) {
            next(error);
        }
    },

    getGameFromList: async ( req, res, next ) => {
        try {
            const { id, game_id } = req.params;

            const game = await db.any(`
                SELECT * FROM list_games
                WHERE list_id=$1 AND game_id=$2
            `, [id, game_id]);

            if(game.length) {
                res.status(200).json({
                    status: "OK",
                    game,
                    message: "Retrieved game"
                })
            } else {
                res.status(200).json({
                    status: 404,
                    message: "Game not found"
                })
            }
        } catch ( error ) {
            next(error);
        }
    },
    getList: async ( req, res, next ) => {
        try {
            const { id } = req.params;

            const list = await db.one(`
                SELECT lists.*, users.first_name, users.last_name, users.username, users.profile_picture
                FROM lists
                LEFT JOIN users on lists.list_owner=users.id
                WHERE lists.id=$1
            `, id);

            const listGames = await db.any(`
                SELECT * FROM list_games
                WHERE list_id=$1
            `, list.id);

            list.games = listGames;

            res.status(200).json({
                status: "OK",
                list,
                message: "Retrieved list"
            })
        } catch ( error ) {
            next(error);
        }
    }
}