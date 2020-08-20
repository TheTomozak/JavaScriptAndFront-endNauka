import * as React from 'react';


import {GitHubRepo} from "./model";

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


