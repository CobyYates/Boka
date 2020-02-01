import Type from './components/Finding/Type.vue'
import CreatorType from './components/Finding/CreatorType.vue'
import ContentType from './components/Finding/ContentType.vue'

export const routes = [
    { path: '', component: Type },
    { path: '/creator-type', component: CreatorType },
    { path: '/content-type', component: ContentType },
    // { path: '', component:  },
]