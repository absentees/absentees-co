<template>
  <article :id="project.node.id" class="project">
    <div class="description">
      <h2>
        <template v-if="project.node.path">
					<g-link :to="project.node.path">{{
            project.node.title
          }}</g-link>
				</template>
				<template v-else>
					{{project.node.title}}
				</template>
      </h2>
      <span class="role">{{ project.node.role }}</span>
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
    width: 100%;
  }
  .role {
    display: block;
    margin-bottom: 0.5ch;
    opacity: 0.6;
  }

  margin-bottom: 8ch;
}
</style>