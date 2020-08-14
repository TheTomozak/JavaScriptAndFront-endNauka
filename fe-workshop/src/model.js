// const map = function ({avatar_url: img = '', bio = 'Cannot get biography'} = {}) {
//     return {
//         img,
//         bio
//     }
// };


//shorthand property = jeżeli klucz w twoim obiekcie i jego wartość są takie same
//czyli jeżeli klucz ma taką samą nazwę jak zmienna bio: bio to wystarczy samo bio

//module.exports = map;


class GitHubUser {


    constructor({avatar_url: img = '', bio = 'Cannot get biography'} = {}) {
        //[this.img, this.bio] = [img, bio];
        this.img = img;
        this.bio = bio;

    }

    toString() {
        return this.bio;
    }
}

module.exports = GitHubUser;



