<template>
    <div v-bind:class="{'bg-danger':!dark_theme,'bg-dark':dark_theme}">
        <h5>{{branding}}</h5>
        <ul>
            <li>
                <label class="switch">
  <input type="checkbox" @change="changetheme">
  <span class="slider round"></span>
</label></li>
            <router-link to="/"><li><i class="fas fa-home"></i> Home</li></router-link>
            <router-link to="/addContact"><li><i class="fas fa-plus"></i> Add Contact</li></router-link>
           <router-link to="/about"><li><i class="fas fa-question"></i> About</li></router-link>
        </ul>
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
 div{
     height: 50px;
     width:100%;
     position: relative;
 }
 h5{
     color: whitesmoke;
     line-height: 50px;
     position: absolute;
     left: 3%;
     cursor: pointer;
 }
 ul{
     float: right;
     list-style-type: none;
 }
 li{
     float: left;
     padding: 10px;
     line-height: 30px;
     font-size: 16px;
     color: white;
     cursor: pointer;
     transition: ease-in-out 1s;
 }
 .switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 22px;
  top:6px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: -2px;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left:2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.darknavbar{
    background-color: darkgray;
}
@media(max-width:767px){
    li{
        padding:1px;
        line-height:50px;
    }
    switch{
        line-height: 50px;
    }
}
</style>
