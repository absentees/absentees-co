<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <!-- <a class="backToTop" href="#title">Back to top</a> -->
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  metaInfo: {
    title: "Scott Blissett — Product Designer",
    titleTemplate: "%s",
  },
  components: {
    Header,
  },
};
</script>


<style lang="scss">
* {
	box-sizing: border-box;
}

html {
  background-color: #f7f7f7;
  font-family: sans-serif;
  width: 100vw; 

  // enable dark mode
  @media (prefers-color-scheme: dark) {
    background-color: #0c0c0c;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 70ch;
  width: auto;
  padding: 4ch 2ch 0;

  @media (min-width: 800px) {
    padding: 12ch 2ch 0;
  }
  margin: 0 auto;
  color: #000;

  @media (prefers-color-scheme: dark) {
    color: #dbdbdb;
  }
}

a {
  padding: 0.15rem 0rem;

  color: inherit;
  line-height: 1.41em;

  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.15rem;
  transition: background-color 200ms ease;

  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.05);
    color: inherit;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

h1, h2, h3, h4 {
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
}

p {
  color: rgb(81, 81, 81);
  @media (prefers-color-scheme: dark) {
    color: #959595;
  }
}

h1 {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1em;
  margin-top: 0;
  margin-bottom: 2em;

}

h2 {
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1em;
}

p {
  font-size: 1rem;
  line-height: 1.5em;
  margin-top: 0;
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
