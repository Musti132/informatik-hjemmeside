import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Products from './pages/Products.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', component: Home
    },
    {
        path: '/about', component: () => import('./pages/About.vue')
    },
    {
        path: '/contact', component: () => import('./pages/Contact.vue')
    },
    {
        path: '/products', component: () => import('./pages/Products.vue')
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;