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
                    class="project"
                    :id="edge.node.id"
                >
                    <div class="name">
                        <h3>{{ edge.node.title }}</h3>
                    </div>
                    <div class="expand-container">
                        <button @click="expandProject(edge.node.id, $event)">
                            Expand
                        </button>
                    </div>
                    <div
                        v-html="edge.node.description"
                        class="description"
                    ></div>
                    <div class="screenshots">
                        <div class="screenshot" v-if="edge.node.screenshots">
                            <div
                                class="screenshot"
                                :key="screenshot.id"
                                v-for="screenshot in edge.node.screenshots"
                            >
                                <img
                                    :src="screenshot.url"
                                    :width="screenshot.width"
                                    :height="screenshot.height"
                                />>
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
        id,
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
        title: "Scott Blissett - Designer/Developer"
    },
    methods: {
        expandProject: function(projectId, event) {
            var screenshots = document
                .getElementById(projectId)
                .querySelector(".screenshots");
            if (screenshots.style.display === "") {
                screenshots.style.display = "flex";
                event.target.innerHTML = "Collapse";
            } else {
                screenshots.style.display = "";
                event.target.innerHTML = "Expand";
            }
        }
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
    display: none;
    flex-direction: row;
    flex-wrap: wrap;

    &.show {
        display: flex;
    }

    > .screenshot {
        flex-basis: 50%;
        font-size: 1.4rem;

        img {
            margin-bottom: 0.5em;
        }

        span {
            display: block;
            margin-bottom: 2em;
        }
    }
}
</style>
