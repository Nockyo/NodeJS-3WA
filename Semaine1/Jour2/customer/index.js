// import

const utils = require('./utils');

const priceHT = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

// Modifiez le tableau pour mettre les prix TTC

priceHT.map(product => {
    let result = utils.toTTC(product.priceHT, 0.2);
    product.priceTTC = result;
});

console.log(priceHT)