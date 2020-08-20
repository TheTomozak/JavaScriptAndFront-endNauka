import * as React from 'react';


import {GitHubRepo} from "./model";
import {getRepoGitHub} from "./service";

// export function RepoTableRow(props: GitHubRepo) { // zamiat tego możemy uzyć destruktyzacji
//
//     return (
//         <tr>
//             <td>{props.name}</td>
//             <td>{props.stargazers_count > 0 ? `${props.stargazers_count} *` : '-'}</td>
//             <td><a href={props.html_url}>?</a></td>
//         </tr>
//     );
// }

export function RepoTableRow({name, stars, url}: GitHubRepo) {
    return (
        <tr>
            <td>{name}</td>
            <td>{stars > 0 ? `${stars} ⭐` : '-'}</td>
            <td><a href={url}>🔗</a></td>
        </tr>
    );
}


interface IReposProps {
    user: string
}

export class Repos extends React.Component<IReposProps, { repos: GitHubRepo[] }> {
    constructor(props: IReposProps) {
        super(props);
        this.state = {
            repos: []
        };
    }

    async componentDidMount() {
        this.setState({repos: await getRepoGitHub(this.props.user)});
    }

    render() {
        return <RepoTable repos={this.state.repos} />;
    }
}

function RepoTable({repos}: { repos: GitHubRepo[] }) {
    return (


        <table className="pure-table pure-table-bordered" style={{margin: '0 auto'}}>
            <tr>
                <td style={{ textAlign:"center"}}>Project Name</td>
                <td style={{ textAlign:"center"}}>Stars</td>
                <td style={{ textAlign:"center"}}>Link</td>
            </tr>
            <tbody>
            {repos.map(r => <RepoTableRow {...r} key={r.name} />)}
            </tbody>
        </table>
    )
}
