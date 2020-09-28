const db = require("../../../db/db");

module.exports = {
    getUserLists: async ( req, res, next ) => {
        try {
            const { id } = req.params;
            const lists = await db.any(`
                SELECT * FROM lists
                WHERE list_owner=$1
            `, id);

            for(let i = 0; i < lists.length; i++) {
                const list = lists[i];
                const listGames = await db.any(`
                    SELECT * FROM list_games
                    WHERE list_id=$1
                `, list.id);
                list.games = listGames;
            }
            
            res.status(200).json({
                status: "OK",
                lists,
                message: "Retrieved lists."
            })
        } catch ( error ) {
            next(error);
        }
    }
}