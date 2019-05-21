const Math = {};


function sumar(x1, x2){
    return x1 + x2;
};

function restar(x1, x2){
    return x1 - x2;
};

function multiplicar(x1, x2){
    return x1 * x2;
};

function dividir(x1, x2){
    if(x2!=0)
    return x1 / x2;
    console.log('La division por cero no esta permitida'.yellow);
};

Math.sumar=sumar;
Math.restar=restar;
Math.multiplicar=multiplicar;
Math.dividir=dividir;

module.exports = Math;