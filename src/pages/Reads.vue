<template>
    <Layout>
        <ul class="links">
            <li v-for="edge in $page.allArticles.edges" :key="edge.node.id">
                <a :href="edge.node.link" target="_blank" rel="noopener noreferrer">{{
                    edge.node.title
                }}</a>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
query {
  allArticles {
    edges {
      node {
        id
        title
        link
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: "Hyperlinks",
        meta: []
    }
};
</script>

<style lang="scss" scoped>
.links {
    padding: 0 1em;

    li {
        margin: 1em 0;
    }
}
</style>
