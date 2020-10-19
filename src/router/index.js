import Vue from 'vue'
import Router from 'vue-router'
import add_contact from '../components/add_contact'
import contact from '../components/contact'
import about from '../components/pages/about'
import notfound from '../components/pages/notfound'
import editcontact from '../components/editcontact'

Vue.use(Router)

export default new Router({
  routes: [
{
  path:'/',
  component:contact,
},
{path:'/addContact',
component:add_contact
},
{
path:'/about',
component:about
},
{
path:'/editcontact/:id',
component:editcontact,
name:'edit'
},
{path:'*',
component:notfound
}
  ]
})
