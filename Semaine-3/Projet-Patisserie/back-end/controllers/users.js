import UsersModel from '../Models/Users.js';

export default async function users (req, res) {
    try {
        const users = await UsersModel.find({});
        res.json({users});
    } catch (err) {
        res.status(500).send(err.message);
    }
};