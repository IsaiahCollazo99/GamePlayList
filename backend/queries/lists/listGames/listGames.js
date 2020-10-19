const db = require("../../../db/db");

module.exports = {
    getListGames: async ( req, res, next ) => {
        try {
            const { id } = req.params;
            const listGames = db.any(`
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
    }
}