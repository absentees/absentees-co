<template>
    <div class="layout">
        <header class="header">
            <h1 id="title" class="title">
                Scott Blissett - Designer/Developer
            </h1>
        </header>
        <nav>
            <ul>
                <li><g-link to="/">Home</g-link></li>
                <li><g-link to="/side-projects/">Side Projects</g-link></li>
            </ul>
        </nav>
        <main class="grid-container">
            <slot />
        </main>
        <a class="backToTop" href="#title">Back to top</a>
    </div>
</template>

<style lang="scss">
html {
    background-color: #f7f7f7;
    font-family: sans-serif;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 80ch;
    padding: 2ch;
    margin: auto;
    color: #000;
}

a {
    color: inherit;
}

h1 {
    // font-weight: 500;
    line-height: 1em;
}

p {
    line-height: 1.5em;
}

.backToTop {
    display: block;
    margin: 1em auto;
}

ul {
    list-style: none;
    padding: 0;

    li {
        margin: 0.5em 0;
    }
}
</style>
