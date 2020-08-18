
export interface IGithubResponse{
  avatar_url?: string;
  bio?: string;

}


export class GitHubUser {
  public img: string;
  public bio: string;

  constructor({ avatar_url: img = '', bio = 'Cannot read a biography' } : IGithubResponse = {}) {
    [this.img, this.bio] = [img, bio];
  }

  toString() {
    return this.bio;
  }
}
