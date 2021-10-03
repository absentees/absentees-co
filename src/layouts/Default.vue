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
        title: "Scott Blissett — Designer/Developer",
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
    max-width: 70ch;
    width: 100%;
    padding: 4ch 2ch 0;
    @media (min-width: 800px) {
    padding: 12ch 2ch 0;    
    }
    margin: auto;
    color: #000;
}

a {
    padding: 0.15rem 0rem;
    
    color: inherit;
    line-height: 1.41em;

    text-decoration: none;
    background-color: rgba(0,0,0,0.05);;
    border-radius: 0.15rem;
    transition: background-color 200ms ease;

    box-sizing: border-box;

    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
}

h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1em;
    margin-top:0;
    margin-bottom: 2em;
}

h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-top:0;
    margin-bottom: 1em;
}

p {
    font-size: 1rem;
    line-height: 1.5em;
    margin-top:0;
    margin-bottom: 1.2rem;
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
