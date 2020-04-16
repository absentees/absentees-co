<template>
    <Layout>
        <div class="projects">
            <article
                v-for="project in $page.datoCMS.allSideProjects"
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
     allSideProjects {
      id
      title
      description
      screenshots {
        id
        responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 800, h: 600, crop: top, bg: "dbdbdb" }) {
          ...responsiveImageFragment
        }
      }
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
        title: 'Side Projects',
        meta: [
        ]
    }
};
</script>

<style lang="scss" scoped>
.project:first-of-type {
    border-top: none;
}

.screenshot {
    flex-basis: 100%;
}
</style>
