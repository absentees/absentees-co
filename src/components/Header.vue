<template>
	<header class="header">
		<p id="title" class="title">Scott Blissett — Product Designer</p>
		<p id="bio">
			Senior product designer working with <a href="http://beem.com.au">Beem</a>, based in Sydney, Australia.
		</p>
		<nav>
			<g-link to="/">Home</g-link>
			<g-link to="/small-websites">Small web</g-link>
			<g-link to="/experiments/">Experiments</g-link>
			<g-link to="/reads/">Reads</g-link>
			<g-link to="/hyperlinks/">Hyperlinks</g-link>
			<g-link to="/cv/">CV</g-link>
		</nav>
		<div id="external-links">
			<a target="_blank" href="https://github.com/absentees">Github ↗</a>
			<a target="_blank" href="https://www.are.na/scott-b-_">Are.na ↗</a>
			<a href="mailto:emailabsentees@gmail.com">Email ↗</a>
			<a href="mailto:emailabsentees@gmail.com">Portfolio available on request ↗</a>
		</div>
	</header>
</template>

<static-query>
query {
	Experiments: allExperiments {
		edges {
			node {
				id
				title
				thumbnail
				content
			}
		}
	}
}
</static-query>

<script>
export default {
	computed: {
		randomExperiment: function () {
			let e =
				this.$static.Experiments.edges[
					`${Math.floor(Math.random() * this.$static.Experiments.edges.length)}`
				].node;
			e.title = e.title.toLowerCase();
			e.path = "/experiments#" + e.id;
			return e;
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	margin-bottom: 4rem;
}

#bio {
	margin-bottom: 2rem;
}

#external-links {
	> a {
		display: inline-block;
		margin-right: 1rem;
	}
}

nav {
	display: block;
	font-size: 1rem;
	margin-bottom: 1rem;

	> a {
		display: inline-block;
		margin-right: 1rem;
	}

	a {
		opacity: 0.6;
		&.active--exact {
			opacity: 1;
		}
	}
}
</style>