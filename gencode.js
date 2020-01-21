function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getLetter(){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return letters[getRandomInt(letters.length)];
}

exports.generateCode = function(){
    let code = "";
    for(let i=0;i<6;i++){
        code += getLetter();
    }
    return code;
}