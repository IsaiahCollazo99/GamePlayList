const db = require("../../../db/db");

module.exports = {
    getUserLists: async ( req, res, next ) => {
        try {
            const { id } = req.params;
            const lists = await db.any(`
                SELECT * FROM lists
                WHERE list_owner=$1
            `, id);

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