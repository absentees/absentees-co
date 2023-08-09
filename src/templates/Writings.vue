<!-- Template for a writing page -->
<template>
	<Layout>
		<h1>{{ $page.data.title }}</h1>
		<div class="content" v-html="$page.data.content">
		</div>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
  data: writings(id: $id) {
    title
    content
  }
}
</page-query>