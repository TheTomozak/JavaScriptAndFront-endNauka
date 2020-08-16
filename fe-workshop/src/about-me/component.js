import {getUser} from '../github/service';

const ME_ATTRIBUTE = 'me';

export class AboutMe extends HTMLElement {

    constructor() {
        super();
    }

    // noinspection JSUnusedGlobalSymbols
    static get observedAttributes() {
        return [ME_ATTRIBUTE];
    }

    // noinspection JSUnusedGlobalSymbols
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === ME_ATTRIBUTE && oldValue !== newValue) {
            this.render(newValue);
        }
    }

    async render(me) {
        const user = await getUser(me);
        this.innerHTML = `
      <img src="${user.img}">
      <p>${user.bio}</p>
    `;
    }
}
