import { getUser } from '../github/service';

const ME_ATTR = 'me';

export class AboutMe extends HTMLElement {
  // noinspection JSUnusedGlobalSymbols
  static get observedAttributes() {
    return [ME_ATTR];
  }

  constructor() {
    super();
  }

  // noinspection JSUnusedGlobalSymbols
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === ME_ATTR && oldValue !== newValue) {
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
