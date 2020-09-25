const db = require("../../../db/db");

module.exports = {
    createList: async ( req, res, next ) => {
        try {
            const { playlist_name, playlist_owner } = req.body;
            const list = db.one(`
                INSERT INTO lists (playlist_name, playlist_owner)
                VALUES ($1, $2)
                RETURNING *
            `, [playlist_name, playlist_owner]);

            res.status(200).json({
                status: "OK",
                list,
                message: "Successfuly created list"
            });
        } catch ( error ) {
            next(error);
        }
    }
}