import PastriesModel from "../Models/Pastries.js";
import UserModel from "../Models/User.js";
import WinningsModel from "../Models/Winnings.js"

export const winners = async (req, res) => {
    try{
        const winnersArray = [];
        const winnings = await WinningsModel.find({})

        if(!winnings){
            res.send(winnersArray);
            return
        }
        
        for(let i = 0; i < winnings.length; i++){
            const pastry = await PastriesModel.find({user_id: winnings.pastries_id});
            const winner = await UserModel.find({user_id: winnings.user_id});
            winningsArray.push({winner, pastry})
        }

        res.send(winnersArray)
    } catch (err) {
        res.status(500).send(err.message);
    }
}