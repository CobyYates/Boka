import Type from './components/Finding/Type.vue'
import CreatorType from './components/Finding/CreatorType.vue'
import ContentType from './components/Finding/ContentType.vue'
import Creators from './components/Finding/Creators.vue'
import Home from './components/Dashboard/Home.vue'
import Clients from './components/Dashboard/Clients.vue'
import Chat from './components/Dashboard/Chat.vue'
import Calendar from './components/Dashboard/Calendar.vue'
import ToDo from './components/Dashboard/ToDo.vue'
import Account from './components/Dashboard/Account.vue'
// import Contracts from './components/Dashboard/Contracts.vue'

export const routes = [
    { path: '', component: Type },
    { path: '/creator-type', component: CreatorType },
    { path: '/content-type', component: ContentType },
    { path: '/creators', component: Creators },
    { path: '/dashboard', component: Home },
    { path: '/clients', component: Clients },
    { path: '/chat', component: Chat },
    { path: '/calendar', component: Calendar },
    { path: '/to-do', component: ToDo },
    { path: '/account', component: Account },
    // { path: '/contracts', component: Contracts },
    // { path: '', component:  },
]