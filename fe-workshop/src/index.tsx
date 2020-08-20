import * as React from 'react';
import * as ReactDOM from 'react-dom';

import initAboutMe from './about-me/index';
import {Repos} from "./github/react-component";


initAboutMe();

declare global {
    namespace JSX {
        // noinspection JSUnusedGlobalSymbols
        interface IntrinsicElements {
            'about-me': { me: string }
        }
    }
}

const user = 'TheTomozak';
ReactDOM.render(
    <>
        <about-me me={user} />
        <Repos user={user} />
    </>,
    document.getElementById('app')
);
