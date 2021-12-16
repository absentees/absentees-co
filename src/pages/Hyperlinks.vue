<template>
  <Layout>
    <p>
      Recent links saved on
      <a target="_blank" href="https://www.are.na/absentees-_/web-0abin7eksxc"
        >are.na</a
      >
    </p>
    <ul>
      <a
        v-for="edge in $page.allBlock.edges"
        :key="edge.node.id"
        :href="edge.node.url"
      >
        <li>
          <img :src="edge.node.image.url" />
          <!-- <span>{{ edge.node.title }}</span> -->
          
        </li>
      </a>
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
        url
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
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.5rem;

  a {
    box-sizing: border-box;
    // width: 100%;
    margin-bottom: 0.5rem;    

    &:hover {
      img {
        width: 400px;
      }
    }
  }

  li {
    text-align: center;
    margin: 0;

    img {
      width: 15px;
      margin: 0 0.25rem;
    }
  }
}

img {
  width: 100%;
  max-width: 200px;
}
</style>