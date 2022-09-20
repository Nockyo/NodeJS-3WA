import PastriesModel from '../Models/Pastries.js';

export default async function pastries (req, res) {
    try {
        const pastries = await PastriesModel.find({});
        res.json({pastries});
    } catch (err) {
        res.status(500).send(err.message);
    }
};