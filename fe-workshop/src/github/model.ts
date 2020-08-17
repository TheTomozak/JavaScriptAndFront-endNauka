export class GitHubUser {
  private img: string;
  private bio: string;

  constructor({ avatar_url: img = '', bio = 'Cannot read a biography' } = {}) {
    [this.img, this.bio] = [img, bio];
  }

  toString() {
    return this.bio;
  }
}
