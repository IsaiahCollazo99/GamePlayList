import db from '../../db/db';

module.exports = {
    signUp: async ( req, res, next ) => {
        try {
            const {
                id, username, first_name, last_name, birthday, email, profile_picture, gender
            } = req.body;
    
            const user = await db.one(`
                INSERT INTO users (id, username, first_name, last_name, birthday, email, profile_picture, gender)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING *
            `, [id, username, first_name, last_name, birthday, email, profile_picture, gender]);
    
            res.status(200).json({
                staus: "OK",
                user,
                message: "successfuly created user."
            })
        } catch ( error ) {
            next(error);
        }
    },
}