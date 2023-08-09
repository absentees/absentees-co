<!-- Template for a writing page -->
<template>
	  <Layout>
	<h1>{{ $page.frontmatter.title }}</h1>
	<div class="content">
	  <Content :page="$page" />
	</div>
  </Layout>
</template>

