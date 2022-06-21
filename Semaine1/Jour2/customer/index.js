// import
const utils = require('./utils');

const {toTTC} = utils;

const priceHT = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

// Modifiez le tableau pour mettre les prix TTC
priceHT.map(product => {
    let result = toTTC(product.priceHT, 5);
    product.priceTTC = result;
});

console.log(priceHT);