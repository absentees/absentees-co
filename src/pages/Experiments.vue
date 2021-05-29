<template>
  <Layout>
    <div class="projects">
      <Project
        v-for="project in $page.Experiments.edges"
        :key="project.id"
        :project="project"
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
import Project from "~/components/Project.vue";

export default {
  metaInfo: {
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss">

</style>
