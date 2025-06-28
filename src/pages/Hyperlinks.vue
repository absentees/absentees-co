<template>
  <Layout>
    <p>
      Recent links saved on
      <a target="_blank" href="https://www.are.na/absentees-_/web-0abin7eksxc">are.na</a>
    </p>
    <ul>
      <li v-for="edge in $page.allBlock.edges" :key="edge.node.id">
        <button @click="selectImage(edge.node)" class="thumbnail-button">
          <img :src="edge.node.image.url" :alt="edge.node.title" />
        </button>
      </li>
    </ul>

    <transition name="fade">
      <div v-if="selectedImage" class="overlay" @click="closeImage">
        <button class="close-button" @click="closeImage">x close</button>
        <a :href="selectedImage.url" target="_blank" rel="noopener noreferrer" @click.stop>
          <img :src="selectedImage.image.url" :alt="selectedImage.title" class="enlarged-image" />
        </a>
      </div>
    </transition>
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
  },
  data() {
    return {
      selectedImage: null
    };
  },
  methods: {
    selectImage(node) {
      this.selectedImage = node;
    },
    closeImage() {
      this.selectedImage = null;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 0.5rem;
}

.thumbnail-button {
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    display: block;
    width: 15px;
    margin: 0 0.25rem;
    transition: transform 0s ease-out;
  }

  &:hover img {
    transform: scale(1.2);
  }
}

.overlay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.enlarged-image {
  display: block;
  width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.15rem;
  transition: background-color 200ms ease;
  line-height: 1.41em;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>