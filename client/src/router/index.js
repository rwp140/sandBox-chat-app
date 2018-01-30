import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import SignIn from '@/components/SignIn/SignIn.vue'
import Contacts from '@/components/Contacts/Contacts.vue'
import Chat from '@/components/Chat/Chat.vue'
import Profile from '@/components/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/Chat/:chatID',
      name: 'Chat',
      component: Chat,
      props:true
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }

  ]
})
