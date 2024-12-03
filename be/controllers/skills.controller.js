import { logger } from "../logger.js";
import db from "../config/db.js"

export const getAllSkills = async (req, res) => {
    try {
        db.query('select * from skills', (err, results) => {
            if (err) {
                logger.error('Error executing query: ', err.message);
                return res.status(500).send({ errormsg: 'Internal Server Error' });
            }
            logger.success();
            return res.status(200).send({ message: 'Skills succesfully fetched', skills: results });
        }
    );
    } catch (error) {
        logger.error(`Error fetching skills: ${error.message}`);
        res.status(400).send(error.message);
    }
}