const db = require("../../db/db");

module.exports = {
    createList: async ( req, res, next ) => {
        try {
            const { list_name, list_owner } = req.body;
            const list = db.one(`
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
    }
}