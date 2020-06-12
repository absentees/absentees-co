<template>
    <Layout>
        <div class="header">
            <!-- <div v-html="$page.datoCMS.about.bio"></div> -->
            <!-- <div v-html="$page.datoCMS.about.links"></div> -->
        </div>
        <div class="projects">
            <article
                v-for="project in $page.allProjects.edges"
                :key="project.node.id"
                class="project"
                :id="project.node.id"
            >
                <div class="description">
                    <h2>{{ project.node.title }}</h2>
                    <span v-html="project.node.description"></span>
                </div>
                <div class="screenshots">
                    <div
                        class="screenshot"
                        :key="screenshot.id"
                        v-for="screenshot in project.screenshots"
                    >
                    </div>
                </div>
            </article>
        </div>
    </Layout>
</template>

<page-query>
query {
  allProjects {
    edges {
      node {
        id
        title
        thumbnail
        description
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        script: [
            { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
        ],
        title: "Scott Blissett - Designer/Developer",
        titleTemplate: '%s',
    },
    mounted() {
        if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                    });
                }
                });
            }
    }
};
</script>

<style lang="scss">
$mobile-width: 550px;

.container {
    box-sizing: border-box;
    width: 100%;
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
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "description"
        "screenshots";
    grid-area: project;

    padding: 1em;
    border-top: 1px solid black;
}

.name {
    grid-area: name;
    word-break: break-word;
}

.description {
    grid-area: description;
}

.mobile {
    grid-area: mobile;
}

.screenshots {
    grid-area: screenshots;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;

    > .screenshot {
        flex-basis: 100%;

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
