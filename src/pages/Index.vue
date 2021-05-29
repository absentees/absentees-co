<template>
  <Layout>
    <div class="projects">
      <Project
        v-for="project in $page.Projects.edges"
        :key="project.id"
        :project="project"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  Projects: allProjects {
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
    title: "Scott Blissett - Designer/Developer",
    titleTemplate: "%s",
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss">

</style>
