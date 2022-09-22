import UserModel from '../Models/User.js';

export default async function users (req, res) {
    try {
        const users = await UserModel.find({});
        res.json({users});
    } catch (err) {
        res.status(500).send(err.message);
    }
};