const toTTC = (priceHT, taxe = 0.2) => {
    priceHT = parseFloat(priceHT);

    if(isNaN(priceHT)) console.error("Ce n\'est pas un nombre");

    // * 100 / 100 permet de gérer certains cas où js ressortira une valeur étrange
    return Math.floor((1 + taxe / 100) * priceHT * 100) / 100
};

exports.toTTC = toTTC;