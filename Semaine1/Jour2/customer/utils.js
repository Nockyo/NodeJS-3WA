const toTTC = (priceHT, taxe) => {
    let priceTTC = priceHT + priceHT * taxe;
    return priceTTC
};

exports.toTTC = toTTC;