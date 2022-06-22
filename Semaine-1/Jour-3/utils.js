let calcMoy = (array) => {
    if(Array.isArray(array))
    {
        let sum = 0;
        array.forEach(note => sum += note);

        let result = sum / array.length;
        return result;
    }
    else return;
}

exports.calcMoy = calcMoy;