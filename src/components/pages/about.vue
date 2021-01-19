<template>
    <div v-bind:class="{'':!theme,'text-secondary':theme}">
            <h1 class="display-4">About Contact Manager</h1>
            <p class="lead">Simple app to manage Contacts</p>
            <h1 class="display-4 mb-2"> Version:2.1.1</h1>
        </div>
</template>
<script>
const { mapState }=require("vuex");

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
@media(max-width:767px){
    div{
        margin-left: 90px;
    }
}
</style>