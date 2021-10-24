<template>
  <article :id="experiment.node.id" class="experiment">
    <div class="description">
      <h2>
        <template v-if="experiment.node.path">
					<g-link :to="experiment.node.path">{{
            experiment.node.title
          }}</g-link>
				</template>
				<template v-else>
					{{experiment.node.title}}
				</template>
      </h2>
      <span class="role">{{ experiment.node.role }}</span>
      <span v-html="experiment.node.content"></span>
    </div>
    <div class="screenshots">
      <g-image :src="experiment.node.thumbnail" />
    </div>
  </article>
</template>

<script>
export default {
  name: "Experiment",
  props: {
    experiment: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.experiment {
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