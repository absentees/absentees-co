<template>
    <Layout>
        <div class="grid-container">
            <div class="header">
                <div v-html="$page.about.edges[0].node.bio"></div>
            </div>
            <div class="projects">
                <div
                    v-for="edge in $page.projects.edges"
                    :key="edge.node.id"
                    class="project">
                    <div class="name">
                        <h3>{{ edge.node.title }}</h3>
                    </div>
                    <div class="expand-container">
                        <button>Expand</button>
                        <div
                            v-html="edge.node.description"
                            class="description"
                        ></div>
                    </div>
					<div class="screenshots">
						<div class="screenshot" v-if="edge.node.screenshots">
							<div class="screenshot" :key="screenshot.id" v-for="screenshot in edge.node.screenshots">
								<g-image :width="screenshot.width.toString()" :height="screenshot.height.toString()" :src="screenshot.url"></g-image>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query {
	about: allDatoCmsAbout {
		edges {
			node {
				bio
			}
    }
  },
  projects: allDatoCmsProject {
    edges {
      node {
        title,
        description,
		screenshots {
			url,
			width,
			height

		}
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: "Hello, world!"
    }
};
</script>

<style lang="scss">
$mobile-width: 550px;

.container {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem 2rem;

    position: relative;
}

.grid-container {
    border: 1px solid black;

    > .header {
        padding: 1em;
    }
}

.project {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.25fr;
    grid-template-rows: auto;
    grid-template-areas:
        "name description plus"
        "screenshots screenshots screenshots";
    grid-area: project;

    > div {
        padding: 1em;
    }

    @media all and (max-width: $mobile-width) {
        grid-template-columns: 1fr 0.25fr;
        grid-template-rows: auto;
        grid-template-areas:
            "name plus"
            "description description"
            "screenshots screenshots";
    }
}

.name {
    border-top: 1px solid black;
}

.description,
.mobile,
.screenshots,
.expand-container {
    border-top: 1px solid black;

    @media all and (max-width: $mobile-width) {
        border-left: none;
    }
}

.name {
    grid-area: name;
    word-break: break-word;
}

.expand-container {
    button {
        margin: 1em 0;
    }
}

.description {
    grid-area: description;
}

.mobile {
    grid-area: mobile;
}

.screenshots {
    grid-area: screenshots;
    // display: none; 
    flex-direction: row;
    flex-wrap: wrap;

    &.show {
        display: flex;
    }

    > .screenshot {
        flex-basis: 50%;
        font-size: 1.4rem;

        img {
            width: 100%;
            margin-bottom: 0.5em;
        }

        span {
            display: block;
            margin-bottom: 2em;
        }
    }
}
</style>
