<template>
    <div class="bg-danger">
        <h5>{{branding}}</h5>
        <ul>
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
     padding: 8px;
     line-height: 30px;
     font-size: 16px;
     color: white;
     cursor: pointer;
     transition: ease-in-out 1s;
 }
</style>
