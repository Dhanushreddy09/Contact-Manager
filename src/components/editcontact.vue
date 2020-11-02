<template>
     <div v-bind:class="{'card':!theme,'card bg-dark text-white':theme}">
        <div class="card-header">
            Edit Contact
        </div>
        <div class="card-body">
           <form @submit='submit' >
               <div class="form-group">
                   <label for="name">Name</label>
                   <input type="text"  v-bind:class="{'form-control form-control-lg':!showerror1,'form-control form-control-lg is-invalid':showerror1}" placeholder="Enter Name" v-model="name">
               </div>
               <div class="text-danger" v-if="showerror1">{{error}}<div class="sep"></div></div>
               <div class="sep"></div>
               <div class="form-group">
                   <label for="name">Email</label>
                   <input type="email"  v-bind:class="{'form-control form-control-lg':!showerror2,'form-control form-control-lg is-invalid':showerror2}"  placeholder="Enter Email" v-model="email" >
               </div>
               <div class="text-danger" v-if="showerror2">{{error}}<div class="sep"></div></div>
               <div class="sep"></div>
               <div class="form-group">
                   <label for="name">Phone</label>
                   <input type="text"   v-bind:class="{'form-control form-control-lg':!showerror3,'form-control form-control-lg is-invalid':showerror3}" placeholder="Enter Phone" v-model="phone" >
               </div>
               <div class="text-danger" v-if="showerror3">{{error}}<div class="sep"></div></div>
               <input type="submit" value="Edit Contact" v-bind:class="{'btn btn-block btn-dark':!theme,'btn btn-block btn-secondary':theme}">
           </form>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data:function(){
    return{
       name:'',
        email:'',
        phone:'',
        error:'',
        showerror1:false,
        showerror2:false,
        showerror3:false
    }
},
computed:{
  ...mapState(['theme'])
},
methods:{
    ...mapActions(['updContact']),
    submit:function(e){
        e.preventDefault()
        this.showerror1=false
        this.showerror2=false
        this.showerror3=false
        if(this.name==''){
           this.showerror1=!this.showerror1
           this.error='Name is required'
           this.name=''
        }
        else if(this.name.length<4){
             this.showerror1=!this.showerror1
           this.error='Name is too short'
        }
        else if(this.email==''){
                 this.showerror2=!this.showerror2
                 this.error='Email is required'
                 this.email=''
        }
        else if(this.email.length<11){
            this.showerror2=!this.showerror2
            this.error='Email is not valid'
        }
        else if(this.phone==''){
            this.showerror3=!this.showerror3
            this.error='Phone is required'
            this.phone=''
        }
        else if(this.phone.length<10){
            this.showerror3=!this.showerror3
            this.error='Phone is not valid'
        }
        else{
            const editContact={
               id:this.$route.params.id,
               name:this.name,
               email:this.email,
               phone:this.phone
            }
            this.updContact(editContact)
           // this.$store.dispatch('updContact',editContact)
            this.name=''
            this.email=''
            this.phone=''
            this.$router.push('/')
        }
        
        
    },
    
}
}
</script>
<style scoped>
.card{
    margin-left: 80px;
    margin-right:80px;
}
.sep{
    height: 5px;
}
@media(max-width:767px){
    .card{
     margin-right: 7px;
        margin-left: 25px;
    }
}
</style>