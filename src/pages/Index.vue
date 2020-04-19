<template>
    <Layout>
        <div class="header">
            <div v-html="$page.datoCMS.about.bio"></div>
            <div v-html="$page.datoCMS.about.links"></div>
        </div>
        <div class="projects">
            <article
                v-for="project in $page.datoCMS.allProjects"
                :key="project.id"
                class="project"
                :id="project.id"
            >
                <div class="description">
                    <h2>{{ project.title }}</h2>
                    <span v-html="project.description"></span>
                </div>
                <div class="screenshots">
                    <div
                        class="screenshot"
                        :key="screenshot.id"
                        v-for="screenshot in project.screenshots"
                    >
                        <div>
                            <div
                                v-bind:style="{
                                    position: 'relative',
                                    backgroundImage: `url(${screenshot.responsiveImage.base64}`,
                                    backgroundColor: 'red',
                                    backgroundSize: 'cover'
                                }"
                            >
                                <div v-bind:style="{ paddingTop: '75%' }">
                                    <picture
                                        style="position: absolute; left: 0; top: 0; width: 100%"
                                    >
                                        <source
                                            :srcset="
                                                screenshot.responsiveImage
                                                    .webpSrcSet
                                            "
                                            type="image/webp"
                                        />
                                        <source
                                            :srcset="
                                                screenshot.responsiveImage
                                                    .srcSet
                                            "
                                        />
                                        <img
                                            :src="
                                                screenshot.responsiveImage.src
                                            "
                                            :alt="
                                                screenshot.responsiveImage.alt
                                            "
                                            :title="
                                                screenshot.responsiveImage.title
                                            "
                                            loading="lazy"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </Layout>
</template>

<page-query>
query {
  datoCMS {
    allProjects(filter: {published: {eq: true}}) {
      id
      title
      description
      screenshots {
        id,
        responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 800, h: 600, crop: top, bg: "dbdbdb" }) {
          ...responsiveImageFragment
        }
      }
    },
     allSideProjects {
      id
      description
      screenshots {
        id
        responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 800, h: 800, crop: top, bg: "dbdbdb" }) {
          ...responsiveImageFragment
        }
      }
    }
  },
  datoCMS {
    about {
      bio
      links
    }
  }
}

fragment responsiveImageFragment on datoCMS_ResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  bgColor
  base64
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
