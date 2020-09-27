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
            
            await db.none(`
                INSERT INTO list_games (list_id, game_id)
                VALUES($1, $2)
            `, [id, game_id]);

            res.status(200).json({
                status: "OK",
                message: "Successfuly added game"
            })
        } catch ( error ) {
            next(error);
        }
    }
}