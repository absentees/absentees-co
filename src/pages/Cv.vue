<template>
    <Layout>
        <p>Work experience</p>
        <Job v-for="job in $page.About.edges[0].node.jobs"
        :key="job"
        :job="job"/>
        <p>Education</p>
        <Job v-for="job in $page.About.edges[0].node.education"
        :key="job"
        :job="job"/>
    </Layout>
</template>

<page-query>
query {
  About: allAbout {
    edges {
      node {
        jobs {
          where
          years
          role
          description
        }
        education {
          where
          years
          role
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
