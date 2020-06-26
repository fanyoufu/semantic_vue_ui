import VueRouter from "vue-router"
import Vue from "vue"
import Index from "../pages/index.vue"
import Headline from "../pages/headline.vue"
import Tab from "../pages/tab.vue"
import Dialog from "../pages/dialog.vue"
import Button from "../pages/button.vue"
import Slider from "../pages/slider.vue"

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        { name: 'home', path: '/', component: Index },
        { name: 'button', path: '/button', component: Button },
        { name: 'headline', path: '/headline', component: Headline },
        { name: 'tabs', path: '/tabs', component: Tab },
        { name: 'slider', path: '/slider', component: Slider },
        { name: 'dialog', path: '/dialog', component: Dialog },
        
        { name: 'timeline', path: '/timeline', component: () => import ('../pages/timeline.vue') },
        { name: 'progressBar', path: '/progressBar', component: () => import ('../pages/progressBar.vue') }
    ]
});
