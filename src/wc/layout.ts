class LayoutComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" }) // Shadow DOM verwenden
    }

    connectedCallback() {
        this.render()
    }

    render() {
        // Shadow DOM-Inhalt
        this.shadowRoot!.innerHTML = /*html*/ `
            <style>
.root {
    --spacing: 0.25rem;

    position: relative;
    display: grid;
    height: 100dvh;
    grid-template-columns: 0 3rem 15rem auto;
    grid-template-rows: 3rem auto;
}

.hidden-input {
    position: fixed;
    --size: 0;
    height: var(--size);
    width: var(--size);
    appearance: none;
    opacity: 0;
}

.toggler {
    grid-column-start: 2;
}

@media (width < 64rem) {
    .toggler[for="layout-expand"] {
        display: none;
    }
}

@media (width >= 64rem) {
    .toggler[for="layout-drawer"] {
        display: none;
    }
}

.toggler > svg {
    display: inline-block;
    --size: 1em;
    width: var(--size);
    height: var(--size);
    fill: currentColor;
}

.header {
    grid-column-start: 3;
    grid-column-end: 5;
}

.side {
    overflow: auto;
}

@media (width < 64rem) {
    .side {
        translate: -100% 0;
        min-height: 100%;
        width: calc(var(--spacing) * 80);
    }

    #layout-drawer:checked ~ .side {
        position: fixed;
        z-index: 1;
        translate: 0;
    }
}

@media (width >= 64rem) {
    #layout-expand:checked ~ .side {
        grid-column-start: 2;
        grid-column-end: 4;
    }
}

.main {
    overflow: auto;
    grid-column-start: 2;
    grid-column-end: 5;
}

@media (width >= 64rem) {
    #layout-expand:checked ~ .main {
        grid-column-start: 4;
    }
}

.overlay {
    position: fixed;
    inset: 0;
    display: none;
}

@media (width < 64rem) {
    #layout-drawer:checked ~ .overlay {
        display: block;
    }
}

            </style>
            <div class="root">
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <symbol id="bi-list" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        ></path>
                    </symbol>
                </svg>

                <input id="layout-expand" type="checkbox" class="hidden-input" />
                <input id="layout-drawer" type="checkbox" class="hidden-input" />

                <label
                    class="toggler"
                    for="layout-expand"
                    title="Toggle sidebar"
                    role="button"
                >
                    <svg class="inline-block" role="img">
                        <use xlink:href="#bi-list"></use>
                    </svg>
                </label>
                <label
                    class="toggler"
                    for="layout-drawer"
                    title="Toggle sidebar"
                    role="button"
                >
                    <svg class="inline-block" role="img">
                        <use xlink:href="#bi-list"></use>
                    </svg>
                </label>
                <header class="header">Header</header>
                <div class="side"><slot name="side"></slot></div>
                <main class="main"><slot></slot></main>
                <label
                    aria-label="close sidebar"
                    for="layout-drawer"
                    class="overlay"
                ></label>
            </div>
        `
    }
}

// Web Component registrieren
customElements.define("my-layout", LayoutComponent)
