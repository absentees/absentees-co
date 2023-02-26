<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap");

html {
  font-family: "Zen Kaku Gothic Antique", sans-serif;
  letter-spacing: 0.01em;
  font-size:18px;
}
</style>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>