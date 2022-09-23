import UserModel from '../Models/User.js';

export const switchLog = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});

        if(!user) {
            res.status(200).send('register');
        } else {
            res.status(200).send('connexion');
        }

    } catch (err) {
        res.status(500).send(err.message);
    }
}