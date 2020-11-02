<template>
<div>
    <div class="header">
   <h1><span class="text-danger">Contact</span><span v-bind:class="{'':!theme,'text-secondary':theme}"> List</span></h1>
   </div>
   <br>
    <li v-for="element in contacts" :key='element.id'>
   <contacts :name='element.name' :email='element.email' :id='element.id' :phone='element.phone'></contacts>
   </li>
   <h5 v-if="contacts.length==0">There are no available Contacts.Try adding few by clicking Add Contact.</h5>
</div>
</template>
<script>
import contacts from './contacts'
import {mapState} from 'vuex'
export default {
    components:{contacts},
    data:function(){
        return{
            checked:false
        }
    },
    computed:{
       /* contacts:function(){
            return this.$store.state.contacts
        }*/
        ...mapState(['contacts','theme'])
    },
    methods:{
        
    }
}
</script>
<style scoped>
.header{
  position: relative;
  height: 50px;
}
h1{
  position: absolute;
  left: 9%;
}
h5{
     position: absolute;
     left: 20%;
     color:grey
}
li{
    list-style-type: none;
}
@media(max-width: 767px){
    h1{
        left: 5%;
    }
    h5{
     position: absolute;
     left:3%;
     color:grey
}
}
</style>