<template>
  <!-- <Layout> -->
    <article>
      <h1>{{ $page.project.title }}</h1>
      <span class="role">{{ $page.project.role }}</span>
      <div v-html="$page.project.content"></div>
    </article>
  <!-- </Layout> -->
</template>

<page-query>
query ($id: ID!) {
  project(id: $id) {
    id
	title
	role
	thumbnail
	content
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
.role {
  display: block;
  opacity: 0.6;
  margin-bottom: 1em;
}
</style>