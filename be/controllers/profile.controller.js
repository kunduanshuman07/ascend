import { logger } from "../logger.js";
import db from "../config/db.js"

export const getProfileDetails = async (req, res) => {
    const { username } = req.body;
    try {
        db.query('select * from users where username = ?', [username], (err, results) => {
            if (err) {
                logger.error('Error executing query: ', err.message);
                return res.status(500).send({ errormsg: 'Internal Server Error' });
            }
            logger.success();
            return res.status(200).send({ message: 'Profile succesfully fetched', profile: results[0] });
        }
        );
    } catch (error) {
        logger.error(`Error fetching profile: ${error.message}`);
        res.status(400).send(error.message);
    }
}

export const updateProfile = async (req, res) => {
    const { username, field, value } = req.body;
    try {
        db.query(`update users set ${field} = ? where username = ?`, [value, username], (err, results) => {
            if (err) {
                logger.error('Error executing query: ', err.message);
                return res.status(500).send({ errormsg: 'Internal Server Error' });
            }
            logger.success();
            return res.status(200).send({ message: 'Profile succesfully updated', profile: results[0] });
        }
        );
    } catch (error) {
        logger.error(`Error updating profile: ${error.message}`);
        res.status(400).send(error.message);
    }
}