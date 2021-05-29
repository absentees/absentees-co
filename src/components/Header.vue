<template>
  <header class="header">
    <h1 id="title" class="title">Scott Blissett - Designer/Developer</h1>
    <p>
      I'm a designer with a developer background currently living in Sydney. I
      work with <a href="https://www.pollen.com.au/">Pollen</a> designing
      premium digital brand experiences whilst also
      <g-link :to="randomExperiment.path">{{ randomExperiment.title }}</g-link
      >.
    </p>
    <nav>
      <ul>
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/experiments/">Experiments</g-link></li>
        <li><g-link to="/reads/">Reads</g-link></li>
        <li><g-link to="/hyperlinks/">Hyperlinks</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<static-query>
query {
  Experiments: allExperiments {
    edges {
      node {
        id
        title
        thumbnail
        content
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    randomExperiment: function () {
      let e = this.$static.Experiments.edges[`${Math.floor(Math.random() * 4)}`]
        .node;
      e.title = e.title.toLowerCase();
      e.path = "/experiments#" + e.id;
      return e;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 4ch;
}

nav {
  a {
    opacity: 60%;
    &.active--exact {
      opacity: 100%;
    }
  }
}
</style>