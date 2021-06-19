<template>
    <Layout>
        <p>Work experience</p>
        <Job v-for="job in $page.Experience.edges[0].node.jobs"
        :key="job"
        :job="job"/>
    </Layout>
</template>

<page-query>
query {
  Experience: allExperience {
    edges {
      node {
        jobs {
          where
          years
          role
          description
        }
      }
    }
  }
}
</page-query>

<script>
import Job from "~/components/Job.vue";

export default {
    metaInfo: {
        title: "CV",
        meta: []
    },
    components: {
        Job
    }
};
</script>

<style lang="scss" scoped>
.links {
    padding: 0;

    li {
        margin: 1em 0;
    }
}
</style>
