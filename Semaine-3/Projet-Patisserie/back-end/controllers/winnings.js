import WinningsModel from '../Models/Winnings.js';

export default async function winnings (req, res) {
    try {
        const winnings = await WinningsModel.find({});
        res.json({winnings});
    } catch (err) {
        res.status(500).send(err.message);
    }
};