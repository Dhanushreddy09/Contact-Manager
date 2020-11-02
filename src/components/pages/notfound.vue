<template>
     <div v-bind:class="{'':!theme,'text-secondary':theme}">
            <h1 class="display-4"><span class="text-danger">404</span> Page not found</h1>
            <p class="Lead">Sorry,this page doesn't exist</p>
        </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['theme'])
    }
}
</script>
<style scoped>
div{
    margin-left: 150px;
}
@media(max-width:767px){div{
    margin-left: 90px;
}}
</style>