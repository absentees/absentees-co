<template>
  <Layout>
    <div class="header">
      <!-- <div v-html="$page.datoCMS.about.bio"></div> -->
      <!-- <div v-html="$page.datoCMS.about.links"></div> -->
    </div>
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
$mobile-width: 550px;

.container {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;

  position: relative;
}
</style>
