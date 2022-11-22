import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Products from './pages/Products.vue';
import PersonalDataPolicy from './pages/PersonalDataPolicy.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/products",
        component: Products,
    },
    {
        path: "/personal-data-policy",
        component: PersonalDataPolicy,
    },
];
const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;
