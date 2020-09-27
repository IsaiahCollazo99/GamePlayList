const db = require('../../db/db');

// Then link backend to frontend
// Test user post to see if it works from frontend to backend

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

    getUserByEmail: async ( req, res, next ) => {
        try {
            const { email } = req.body;

            const user = await db.any(`
                SELECT * FROM USERS
                WHERE email=$1
            `, email);

            if(user.length) {
                res.status(200).json({
                    status: "OK",
                    user,
                    message: "User retrieved."
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "User with that email does not exist"
                })
            }
        } catch ( error ) {
            next(error);
        }
    },

    getUserByUsername: async ( req, res, next ) => {
        try {
            const { username } = req.params;

            const user = await db.any(`
                SELECT * FROM USERS
                WHERE username=$1
            `, username);

            if(user.length) {
                res.status(200).json({
                    status: "OK",
                    user,
                    message: "User retrieved."
                })
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "User with that username does not exist"
                })
            }
        } catch ( error ) {
            next(error);
        }
    },

    getUserById: async ( req, res, next ) => {
        try { 
            const { id } = req.params;
            const user = await db.one(`
                SELECT * FROM users
                WHERE id=$1
            `, id) ;

            res.status(200).json({
                status: "OK",
                user,
                message: "User retrieved."
            })
        } catch ( error ) {
            next(error);
        }
    },
}