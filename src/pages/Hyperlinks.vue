<template>
    <Layout>
        <div class="about" :v-html="$page.datoCMS.hyperlink.about"></div>
        <ul class="links">
            <li v-for="link in $page.datoCMS.hyperlink.allLinks" :key="link.id">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">{{link.url}}</a>
            </li>
        </ul>
    </Layout>  
</template>

<page-query>
query {
    datoCMS {
        hyperlink {
            about(markdown:true)
            allLinks {
                id
                url
                createdAt
            }
        }
    }
}

</page-query>

<script>
export default {
    metaInfo: {
        title: 'Hyperlinks',
        meta: [
        ]
    }
};
</script>

<style lang="scss" scoped>
    .links {
        padding: 0 1em;

        li {
            margin: 1em 0;
        }
    }
</style>
