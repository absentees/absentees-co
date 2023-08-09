<template>
    <Layout>
        <p>Some more thoughts and thinking from yet another Product Designer. Views and opinions are my own.</p>
        <ul class="links">
            <li v-for="edge in $page.allWritings.edges" :key="edge.node.id">
                <a :href="edge.node.path" rel="noopener noreferrer">{{
                    edge.node.title
                }}</a>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
query {
  allWritings {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: "Writings",
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
