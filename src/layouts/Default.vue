<template>
    <div class="layout">
       <Header/>
        <main>
            <slot />
        </main>
        <a class="backToTop" href="#title">Back to top</a>
    </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
    metaInfo: {
        title: "Scott Blissett - Designer/Developer",
        titleTemplate: '%s',
    },
    components: {
        Header
    }
};
</script>


<style lang="scss">
html {
    background-color: #f7f7f7;
    font-family: sans-serif;
}

body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 80ch;
    width: 90%;
    padding: 2ch 0;
    margin: auto;
    color: #000;
}

a {
    color: inherit;
}

h1 {
    font-weight: 500;
    font-size: 22px;
    line-height: 1em;
}

h2 {
    font-size: 18px;
    font-weight: 500;
}

p {
    line-height: 1.5em;
}

.backToTop {
    display: block;
    margin: 4ch auto;
}

ul {
    list-style: none;
    padding: 0;

    li {
        margin: 0.5em 0;
    }
}
</style>
