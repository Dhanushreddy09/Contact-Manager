import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)


const store={
    state:{
        contacts:[{
            id:1,
            name:'Dhanush',
            phone:'9550783110',
            email:'pothulapati5434@gmail.com'
        },
        {
            id:2,
            name:'Tharaka',
            phone:'8179972551',
            email:'pothulapatitharaka@gmail.com'
        },
        {
            id:3,
            name:'John',
            phone:'9552541100',
            email:'johncrimson4@gmail.com'
        },
        {
            id:4,
            name:'Bob Marley robson',
            phone:'9545872110',
            email:'bob@gmail.com'
        },
        {
            id:5,
            name:'Jackson',
            phone:'9536872110',
            email:'jockey@gmail.com'
        }
        ],
        theme:false
    },
    getters:{},
    mutations:{
        deleteContact(state,id){
         state.contacts= state.contacts.filter(contact=>contact.id!==id)
        },
        addNew(state,contact){
            state.contacts=[contact,...state.contacts]
           
        },
        updTheContact(state,newcontact){
            state.contacts=state.contacts.map(contact=>contact.id==newcontact.id?(contact=newcontact):contact)
        },
        changetheme(state,theme){
            state.theme=!state.theme;
        }
    },
    actions:{
        delete(context,id){
            context.commit('deleteContact',id)
        },
        addNewContact(context,contact){
            context.commit('addNew',contact)
        },
        updContact(context,arguement){
           context.commit('updTheContact',arguement)
        },
        themechange(context,theme){
           context.commit("changetheme",theme)
        }
    }
}
export default new vuex.Store(store);