<template>
    <div>
        <div v-bind:class="{'card card-body':!theme,'card card-body bg-secondary':theme}">
            <div class="h">
    <h4>{{name}} <i @click="show=!show" class="fas fa-caret-down"></i></h4>
        <i @click="deleteContact" v-bind:class="{'fas fa-trash-alt text-danger symbol1':!theme,'fas fa-trash-alt text-dark symbol1':theme}" title="Delete Contact"></i>
        <router-link :to="{name:'edit',params:{id:`${id}`}}"><i v-bind:class="{'fas fa-pencil-alt text-primary symbol2':!theme,'fas fa-pencil-alt text-dark symbol2':theme}" title="Edit Contact"></i></router-link>
            </div>
            <div class="sep"></div>
    <ul class="list-group" v-if="show">
    <li v-bind:class="{'list-group-item':!theme,'list-group-item bg-secondary':theme}"><i class="fas fa-envelope"></i><b> Email :</b> {{email}}</li>
    <li v-bind:class="{'list-group-item':!theme,'list-group-item bg-secondary':theme}"><i class="fas fa-phone"></i><b> Phone :</b> {{phone}}</li>
  </ul>
    </div>
    <br>
    </div>
</template>
<script>
const { mapActions, mapState }=require("vuex")

export default{
   props:['name','email','phone','id'],
   data:function(){
       return{
           show:false
       }
   },
   computed:{
      ...mapState(['theme'])
   },
   methods:{
       ...mapActions(['delete']),
      deleteContact:function(){
          //this.$store.dispatch('delete',this.id)
          this.delete(this.id)
      }
   }
}
</script>
<style scoped>
.card{
margin-left:120px;
margin-right:120px
}
.card:hover{
     transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.fa-caret-down{
    cursor: pointer;
}
h4{
    display: inline;
}
.symbol1{
    float:right;
    color: black;
    font-size: 30px;
    cursor:pointer;
    margin-right:1 rem;
}
.sep{
    height: 15px;
}
.symbol2{
    float:right;
    color: black;
    font-size: 30px;
    cursor:pointer;
    margin-right: 30px;
}
@media(max-width:767px){
    .symbol{
        margin-right: 20px;
        font-size: 20px;
    }
    .card{
        margin-right: 7px;
        margin-left: 25px;
    }
}

</style>