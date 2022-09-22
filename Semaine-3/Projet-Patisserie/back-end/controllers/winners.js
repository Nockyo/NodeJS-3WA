import PastriesModel from "../Models/Pastries.js";
import UserModel from "../Models/User.js";
import WinningsModel from "../Models/Winnings.js"

export const winners = async (req, res) => {
    try{
        const winnersArray = [];
        const winnings = await WinningsModel.find({});

        if(!winnings){
            res.send(winnersArray);
            return
        }

        let checkObject = {};
        for(const winning in winnings){
            let userId = winnings[winning].user_id;

            checkObject[userId] = true;
            // Récupérer le nom de l'utilisateur
            const winner = await UserModel.find({_id: winnings[winning].user_id});
            let userName = winner[0].firstname + ' ' + winner[0].lastname;
            // Récupérer le nom de la pâtisserie
            const pastry = await PastriesModel.find({_id: winnings[winning].pastries_id});
            // Push le tableau des vainqueurs
            winnersArray.push({user: userName, pastry: pastry[0].name});
        };

        res.json(winnersArray);
    } catch (err) {
        res.status(500).send(err.message);
    }
}