<template>
  <article :id="project.node.id" class="project">
    <div class="description">
      <h2>{{ project.node.title }}</h2>
      <span v-html="project.node.content"></span>
    </div>
    <div class="screenshots">
      <g-image :src="project.node.thumbnail" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
    img {
        width:100%;
    }

    margin-bottom: 4ch;
}
</style>