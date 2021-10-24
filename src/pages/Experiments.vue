<template>
  <Layout>
    <div class="projects">
      <experiment
        v-for="experiment in $page.Experiments.edges"
        :key="experiment.id"
        :experiment="experiment"
      />
    </div>
  </Layout>
</template>

<page-query>
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
</page-query>

<script>
import Experiment from "~/components/Experiment.vue";

export default {
  metaInfo: {
    title: "Experiments"
  },
  components: {
    Experiment
  },
};
</script>

<style lang="scss">

</style>
