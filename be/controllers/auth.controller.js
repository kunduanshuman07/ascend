import { logger } from "../logger.js"
import db from "../config/db.js"

export const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        db.query('Select * from users where username = ? or email = ?', [username, username], (err, results) => {
            if (err) {
                logger.error('Error executing query: ', err.message);
                return res.status(500).send({ errormsg: 'Internal Server Error' });
            }
            if (results.length === 0) {
                logger.error('No user exists with the provided username or email');
                return res.status(201).send({ errormsg: 'No user exists with the provided username or email' });
            }
            const user = results[0];
            if (user.password !== password) {
                logger.error('Invalid password');
                return res.status(201).send({ errormsg: 'Invalid password' });
            }
            logger.success();
            return res.status(200).send({ message: 'User signed in successfully', user: user.username });
        })
    } catch (error) {
        logger.error(error.message);
        res.status(500).send(error.message);
    }
}

export const signup = async (req, res) => {
    const { username, password, name, email } = req.body;

    try {
        db.query('select * from users where username = ? or email = ?', [username, email], (err, results) => {
            if (err) {
                logger.error('Error executing query: ', err.message);
                return res.status(500).send({ errormsg: 'Internal Server Error' });
            }

            if (results.length > 0) {
                logger.error('User already exists');
                return res.status(201).send({ errormsg: 'User already exists' });
            }

            const sql = 'insert into users (username, password, name, email) values (?, ?, ?, ?)';
            db.query(sql, [username, password, name, email], (err) => {
                if (err) {
                    logger.error('Error executing query: ', err.message);
                    return res.status(500).send({ errormsg: 'Internal Server Error' });
                }

                logger.success();
                return res.status(200).send({ message: 'User signed up successfully', user: username });
            });
        });
    } catch (error) {
        logger.error(`Error during signup: ${error.message}`);
        res.status(400).send(error.message);
    }
};
