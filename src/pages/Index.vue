<template>
  <Layout>
    <!-- <div class="projects">
      <Project
        v-for="project in $page.Projects.edges"
        :key="project.id"
        :project="project"
      />
    </div> -->
  </Layout>
</template>

<page-query>
query {
  Projects: allProject {
    edges {
      node {
        id
        title
        role
        thumbnail
        content
        path
      }
    }
  }
}
</page-query>

<script>
import Project from "~/components/Project.vue";

export default {
  metaInfo: {
    title: "Scott Blissett - Product Designer/Developer",
    titleTemplate: "%s",
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss" scoped>

</style>
