<template>
    <Layout>
        <main class="grid-container">
            <div class="header">
                <div v-html="$page.datoCMS.about.bio"></div>
            </div>
            <div class="projects">
                <article
                    v-for="project in $page.datoCMS.allProjects"
                    :key="project.id"
                    class="project"
                    :id="project.id"
                >
                    <div class="name">
                        <h2>{{ project.title }}</h2>
                    </div>
                    <div class="expand-container">
                        <button @click="expandProject(project.id, $event)">
                            Expand
                        </button>
                    </div>
                    <div
                        v-html="project.description"
                        class="description"
                    ></div>
                    <div class="screenshots">
                        <div
                            class="screenshot"
                            :key="screenshot.id"
                            v-for="screenshot in project.screenshots"
                        >
                            <div>
                                <div v-bind:style="{'position': 'relative','backgroundImage': `url(${screenshot.responsiveImage.base64}` ,'backgroundColor' : 'red', 'backgroundSize': 'cover'}">
                                    <div v-bind:style="{'paddingTop': '75%' }">
                                        <picture style="position: absolute; left: 0; top: 0; width: 100%">
                                            <source :srcset="screenshot.responsiveImage.webpSrcSet" type="image/webp">
                                            <source :srcset="screenshot.responsiveImage.srcSet">
                                            <img :src="screenshot.responsiveImage.src" :alt="screenshot.responsiveImage.alt" :title="screenshot.responsiveImage.title" loading="lazy">
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    </Layout>
</template>

<page-query>
query {
  datoCMS {
    allProjects(orderBy: [title_ASC]) {
      id
      title
      description
      screenshots {
        id,
        responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 800, h: 600, crop: top, bg: "10181c" }) {
          ...responsiveImageFragment
        }
      }
    }
  },
  datoCMS {
    about {
      bio
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
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;

    > .screenshot {
        flex-basis: 50%;
        
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
