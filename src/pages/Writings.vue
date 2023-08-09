<template>
    <Layout>
        <p>Some more thoughts and thinking from yet another Product Designer. Views and opinions are my own.</p>
        <ul class="links">
            <li v-for="edge in $page.allWriting.edges" :key="edge.node.id">
                <a :href="edge.node.slug" rel="noopener noreferrer">{{
                    edge.node.title
                }}</a>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
query {
  allWriting {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: "Writing",
        meta: []
    }
};
</script>

<style lang="scss">
.links {
    padding: 0;

    li {
        margin: 1em 0;
    }
}
</style>
