import UsersModel from '../Models/Users.js';
import { generateAccessToken } from '../utils/utils.js'

// AJouter vérif mail hashé

export default async function login (req, res) {
    try {
        const user = await UsersModel.findOne({email: req.body.email});
        if(user === null) {
            //tester !user
            res.status(401).send('invalid');
            return
        }

        //Générer le JWT
        const accessToken = generateAccessToken({email: user.email});
        res.send({accessToken});
    } catch (err) {
        res.status(500).send(err.message);
    }
};