import UserModel from '../Models/User.js';
import { generateAccessToken } from '../utils/utils.js';

export const register = async (req, res) => {
    let {password, passwordConfirm} = req.body;
    if (password !== passwordConfirm) {
        res.status(401).json({message: "This Password is not valid"});
        return
    }
    try {
        const user = await UserModel.create({...req.body});
        let jwt = generateAccessToken(user);
        res.status(200).json({jwt});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}