<template>
  <div id="app" v-bind:class="{'bg-dark':theme,'':!theme}">
   <navbar></navbar>
   <br> 
   <router-view></router-view>
  <div>
  </div>
  </div>
</template>

<script>
import navbar from './components/navbar'
import add_contact from './components/add_contact'
import contacts from './components/contacts'
import contact from './components/contact'
import { mapState } from 'vuex'
export default {
  components:{navbar,add_contact,contacts,contact},
  mounted(){
    
      this.$store.dispatch("getcontacts")
    
  },
  data:function(){
    return{
      
    }
},
computed:{
 ...mapState(['theme'])
}
}
</script>

<style>

</style>
