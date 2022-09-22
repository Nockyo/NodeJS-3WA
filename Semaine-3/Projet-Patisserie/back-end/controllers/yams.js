import PastriesModel from '../Models/Pastries.js';
import WinningsModel from '../Models/Winnings.js';

export const yams = async (req, res) => {
    try {
        const userId = req.data.data._id

        //L'utilisateur ne peut pas rejouer si il a déjà gagné
        const winnings = await WinningsModel.find({user_id: userId})
        if(winnings.length > 0){
            res.send("You already won, don't be greedy");
            return
        }

        let results = {};
        let double = false;
        let winningsCount = 0;
        let userWinnings = [];

        //Obtenir 5 résultats aléaloires
        for(let i = 0; i < 5; i++){
            let dice = Math.floor(Math.random() * 5);
            if(results[dice]){
                results[dice]++
            } else {
                results[dice] = 1;
            };
        };

        //Regarder si l'un des résultats permet de gagner une pâtisserie
        for(const result in results){
            if(results[result] === 5){
                winningsCount = 3;
            } else if (results[result] === 4) {
                winningsCount = 2;
            } else if (results[result] > 1 && !double) {
                double = true;
            } else if (results[result] > 1 && double) {
                winningsCount = 1;
            } else {
                res.send("Gros looser, t'es aussi mauvais que Clarisse");
                return
            }
        };

        //!!!!PEUT-ETRE PLUS UTILE DE CREER UN TABLEAU AVEC LES PASTRIES, DE BOUCLER DESSUS PUIS DE FAIRE UN UPDATEMANY, PLUTOT QUE DE FAIRE PLUSIEURS APPELS A LA BDD!!!!
        for(let i = 0; i < winningsCount; i++){
            // Récupérer au hasard une pâtisserie
            const pastries = await PastriesModel.find({quantity: { $gt: 0 }});
            if(!pastries){
                res.send("Toutes les pâtisseries ont été gagnée. Revenez au prochain jeu.")
                return
            }

            let randomPastry = pastries[Math.floor(Math.random() * pastries.length)];
            userWinnings.push(randomPastry);

            // La décrémenter de la base de donnée
            const newPastry = await PastriesModel.updateOne({_id: randomPastry._id}, {quantity: (randomPastry.quantity - 1)});

            // l'ajouter dans la table winnings avec l'id de l'utilisateur et de pâtisserie
            const winning = await WinningsModel.create({user_id: userId,pastries_id: randomPastry._id});
        };

        res.json(userWinnings)
    } catch (err) {
        res.status(500).send(err.message);
    };
};