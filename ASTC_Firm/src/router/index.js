import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'
import About from '@/views/About/About.vue'
import Products from '@/views/Products/Products.vue'
import Contact from '@/views/Contact/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router