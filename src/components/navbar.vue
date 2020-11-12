<template>
    <div v-bind:class="{'bg-danger':!dark_theme,'bg-dark':dark_theme}">
        <nav class="navbar navbar-default navbar-expand-sm navbar-dark py-0 mb-3">
    <a class="navbar-brand" href="/">{{branding}}</a>
  
    <div class="navbar-collapse w-100  order-3 ">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active mt-1">
              <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" @change="changetheme" id="customSwitch1">
  <label class="custom-control-label" for="customSwitch1"></label>
</div>
          </li>
        <li class="nav-item active ">
          <router-link to="/" class="text-white text-decoration-none"><li><i class="fas fa-home"></i> Home</li></router-link>
        </li>
        <li class="nav-item active">
            <router-link to="/addContact" class="text-white text-decoration-none "><li><i class="fas fa-plus"></i> Add Contact</li></router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/about" class="text-white text-decoration-none "><li><i class="fas fa-question"></i> About</li></router-link>
        </li>
       </ul>
    </div>
  </nav>
    </div>
</template>
<script>
module.exports={
data:function(){
    return{
        branding:'Contact Manager',
        dark_theme:false
    }
},
methods:{
    changetheme:function(){
        this.dark_theme=!this.dark_theme
        if(this.dark_theme==true){
        document.querySelector('body').className='bg-dark'
        }
        else{
            document.querySelector('body').className=''
        }
        this.$store.dispatch("themechange",this.dark_theme)
    }
}
}
</script>
<style scoped>
li{
  padding:3px;
}
</style>
