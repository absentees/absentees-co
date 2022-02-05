<template>
  <Layout>
    <p>
      These are some small, headless, static, low maintenance, low ongoing cost ($0)
      websites I have made. The usual build is Netlify, Netlify CMS, Gridsome, vanilla CSS.
      <a href="mailto:emailabsentees@gmail.com">Get in touch</a> if you would
      like to design and build one together.
    </p>
    <div class="websites">
      <experiment
        v-for="website in $page.Websites.edges"
        :key="website.id"
        :experiment="website"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  Websites: allWebsites {
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
    title: "Small website",
  },
  components: {
    Experiment,
  },
};
</script>

<style lang="scss">
</style>
