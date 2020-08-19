export interface IGithubUserResponse {
    avatar_url?: string;
    bio?: string;

}

export interface IGitHubRepoResponse {
    name: string;
    stargazers_count: number;
    fork: boolean;
    html_url: string;

}


export class GitHubRepo {
    html_url: string;
    name: string;
    stargazers_count: number;

    constructor({html_url: url, name, stargazers_count: stars}: IGitHubRepoResponse) {
        this.html_url = url;
        this.name = name;
        this.stargazers_count = stars;
    }


}


export class GitHubUser {
    public img: string;
    public bio: string;

    constructor({avatar_url: img = '', bio = 'Cannot read a biography'}: IGithubUserResponse = {}) {
        [this.img, this.bio] = [img, bio];
    }

    toString() {
        return this.bio;
    }
}
