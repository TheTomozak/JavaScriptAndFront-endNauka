
const map = function ({avatar_url : img = '', bio = 'Cannot get biography'}= {}) {
    return {
        img,
        bio
    }
};

//shorthand property = jeżeli klucz w twoim obiekcie i jego wartość są takie same
//czyli jeżeli klucz ma taką samą nazwę jak zmienna bio: bio to wystarczy samo bio

module.exports = map;