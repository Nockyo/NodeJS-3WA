import dotenv from 'dotenv';
import PastriesModel from '../Models/Pastries.js';

dotenv.config()

export default async function home (req, res) {
    try {
        const pastries = await PastriesModel.find({});
        res.json({pastries});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

