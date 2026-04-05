class MyWidget extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div style="background-color: #ffffff; padding: 20px; border: 2px solid #000; border-radius: 10px; text-align: center;">
                <h2 style="color: #333;">Embed Active</h2>
                <p>The connection to your custom element is successful!</p>
            </div>`;
    }
}
customElements.define('my-widget-tag', MyWidget);