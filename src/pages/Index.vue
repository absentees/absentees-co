<template>
  <Layout>
    <p>Selected projects below, if you would like a deep dive into anything, <a href="mailto:emailabsentees@gmail.com">let's chat</a>.</p>
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
        role
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

<style lang="scss" scoped>

</style>
