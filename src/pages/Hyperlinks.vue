<template>
  <Layout>
    <p>
      Some links I have saved on
      <a href="https://www.are.na/absentees-_/">are.na</a>
    </p>
    <ul>
      <li v-for="edge in $page.allBlock.edges" :key="edge.node.id">
        {{edge.node.title}}
        <img :src="edge.node.image.url" alt="" srcset="">
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allBlock {
    edges {
      node {
        id
        title
        image {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>