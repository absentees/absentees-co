<template>
  <article :id="Job.id" class="job">
    <h2>{{ Job.where }}</h2>
    <span>{{ Job.role }}</span>
    <span>{{ Job.years }}</span>
    <p>{{ Job.description }}</p>
  </article>
</template>

<script>
export default {
  name: "Job",
  props: {
    Job: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.job {
    span {
        display: block;
        margin-bottom: 0.5ch;
        opacity: 0.6;
    }
    margin-bottom: 4ch;
}
</style>