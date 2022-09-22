import UsersModel from '../Models/User.js';
import { generateAccessToken, comparePassword } from '../utils/utils.js';

export default async function login (req, res) {
    try {
        const user = await UsersModel.findOne({email: req.body.email});

        if(!user) {
            res.status(401).send('invalid mail or password');
            return
        };

        comparePassword(req.body.password, user.password)
            .then(data => {
                if(data){
                    let jwt = generateAccessToken(user);
                    res.status(200).json({user, jwt});
                } else {
                    res.status(400).send('invalid mail or password');
                }
            });

    } catch (err) {
        res.status(500).send(err.message);
    }
};