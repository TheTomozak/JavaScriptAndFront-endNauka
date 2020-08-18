export interface IGithubResponse {
    avatar_url?: string;
    bio?: string;
}
export declare class GitHubUser {
    img: string;
    bio: string;
    constructor({ avatar_url: img, bio }?: IGithubResponse);
    toString(): string;
}
