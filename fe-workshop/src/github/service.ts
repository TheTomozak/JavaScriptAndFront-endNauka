import {GitHubRepo, GitHubUser, IGitHubRepoResponse} from './model';

export async function getUser(name: string) : Promise<GitHubUser> {
  try {
    const resp = await fetch(`https://api.github.com/users/${name}`);
    return new GitHubUser(await resp.json());
  } catch (e) {
    console.warn(e);
    return new GitHubUser();
  }
}


export async function getRepoGitHub(name: string) : Promise<GitHubRepo[]> {
  try {
    const resp = await fetch(`https://api.github.com/users/${name}/repos`);
   return (await resp.json() as IGitHubRepoResponse[])
        .filter(r => !r.fork)
        .map(r => new GitHubRepo(r));
  } catch (e) {
    console.warn(e);
    return [];
  }

}

