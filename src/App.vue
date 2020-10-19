<template>
  <div id="app">
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
export default {
  components:{navbar,add_contact,contacts,contact},
}
</script>

<style>

</style>
