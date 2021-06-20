<template>
  <header class="header">
    <h1 id="title" class="title">Scott Blissett - Designer/Developer</h1>
    <p>
      Senior designer with a web development background, based in Sydney, Australia. Currently working with <a href="https://www.pollen.com.au/">Pollen</a> designing
      premium digital brand experiences and <g-link :to="randomExperiment.path">{{ randomExperiment.title }}</g-link
      > on the side.
    </p>
    <nav>
      <ul>
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/experiments/">Experiments</g-link></li>
        <li><g-link to="/reads/">Reads</g-link></li>
        <li><g-link to="/hyperlinks/">Hyperlinks</g-link></li>
        <li><g-link to="/cv/">CV</g-link></li>
        <li>---</li>
        <li><a target="_blank" href="https://github.com/absentees">Github</a></li>
        <li><a target="_blank" href="https://www.are.na/absentees-_">Are.na</a></li>
        <li><a href="mailto:emailabsentees@gmail.com">emailabsentees@gmail.com</a></li>
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
      let e = this.$static.Experiments.edges[`${Math.floor(Math.random() * this.$static.Experiments.edges.length)}`]
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
    opacity: 0.6;
    &.active--exact {
      opacity: 1;
    }
  }
}
</style>