import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex)


const store={
    state:{
        contacts:[],
        theme:false
    },
    getters:{},
    mutations:{
        deleteContact(state,id){
         state.contacts= state.contacts.filter(contact=>contact.id!==id)
        },
        addNew(state,contact){
            state.contacts=[...state.contacts,contact]
           
        },
        updTheContact(state,newcontact){
            state.contacts=state.contacts.map(contact=>contact.id==newcontact.id?(contact=newcontact):contact)
        },
        changetheme(state,theme){
            state.theme=!state.theme;
        },
        setposts(state,posts){
            state.contacts=posts
        }
    },
    actions:{
        delete({commit},id){
            //context.commit('deleteContact',id)
            axios.post('http://localhost/Contact_Manager/src/fetchcontacts.php',{action:'deletecontact',id:id})
            .then(
                commit("deleteContact",id)
            ).catch(err=>console.log(err))
        },
        addNewContact({commit},contact){
            //context.commit('addNew',contact)
            axios.post("http://localhost/Contact_Manager/src/fetchcontacts.php",{action:'addcontact',contact})
            .then(
                //commit('addNew',contact),
                location.replace("/")
                //commit('setposts')
            ).catch(err=>console.log(err))
        },
        updContact(context,arguement){
           //context.commit('updTheContact',arguement)
           axios.post("http://localhost/Contact_Manager/src/fetchcontacts.php",{action:'update',arguement}).then(
               location.replace("/")
           )
        },
        themechange(context,theme){
           context.commit("changetheme",theme)
        },
        getcontacts({commit}){
            axios.post("http://localhost/Contact_Manager/src/fetchcontacts.php",{action:'getcontacts'})
              .then(
              res=>{

                  let posts=res.data
              commit("setposts",posts)
                }

          ).catch(err=>console.log(err))
      }
    }
}
export default new vuex.Store(store);