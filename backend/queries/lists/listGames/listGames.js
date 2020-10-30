const db = require("../../../db/db");

module.exports = {
    getListGames: async ( req, res, next ) => {
        try {
            const { id } = req.params;

            const listGames = await db.any(`
                SELECT * FROM list_games
                WHERE list_id=$1
            `, id);
            
            if(listGames.length) {
                res.status(200).json({
                    status: "OK",
                    listGames,
                    message: "Retrieved games for list"
                })
            } else {
                res.status(200).json({
                    status: 404,
                    message: "List has no games"
                })
            }
        } catch ( error ) {
            next(error);
        }
    },

    removeGameFromList: async ( req, res, next ) => {
        try {
            const { id: list_id, game_id } = req.params;

            const deletedItem = await db.one(`
                DELETE FROM list_games
                WHERE list_id=$1 AND game_id=$2
                RETURNING *
            `, [list_id, game_id])

            const list = await db.one(`
                SELECT lists.*, users.first_name, users.last_name, users.username, users.profile_picture
                FROM lists
                LEFT JOIN users on lists.list_owner=users.id
                WHERE lists.id=$1
            `, deletedItem.list_id);

            const listGames = await db.any(`
                SELECT * FROM list_games
                WHERE list_id=$1
            `, list.id);

            list.games = listGames;

            res.status(200).json({
                status: "OK",
                list,
                message: "Removed game from list"
            })
        } catch ( error ) {
            next(error);
        }
    }, 
}