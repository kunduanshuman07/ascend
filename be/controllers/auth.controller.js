import { logger } from "../logger.js"

const un = 'kunduanshuman07';
const pd = 'Chef@coding7';

export const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username !== un || password !== pd) {
            logger.error('Invalid Credentials');
            return res.status(201).send({errormsg: 'Invalid Credentials'});
        }
        logger.success();
        res.status(200).send();
    } catch (error) {
        logger.error(error.message);
        res.status(500).send(error.message);
    }
}
