<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
// Imports
// import showBlogs from './components/showBlogs.vue';
// import listBlogs from './components/listBlogs.vue';
import header from './components/layout/header.vue';
import footer from './components/layout/footer.vue';
export default {
    components: {
        // 'show-blogs': showBlogs,
        // 'list-blogs': listBlogs,
            'app-header':header,
            'app-footer':footer


    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>