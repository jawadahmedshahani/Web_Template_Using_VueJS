<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Search } from 'lucide-vue-next'

import logo from '@/assets/logos/logo.svg'

const route = useRoute()

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
]
</script>

<template>

<nav class="bg-white shadow">

    <div class="container mx-auto px-6">

        <div class="flex justify-between items-center h-20">

            <!-- Logo -->

            <RouterLink to="/">

                <img
                    :src="logo"
                    alt="Logo"
                    class="h-14"
                >

            </RouterLink>

            <!-- Menu -->

            <ul class="flex items-center gap-8">

                <li v-for="link in navLinks"
                    :key="link.path"  >

                    <RouterLink
                        :to="link.path"
                        class="font-medium hover:text-orange-500 transition"
                        :class="route.path == link.path ? 'text-orange-500' : 'text-gray-700'" >

                        {{ link.name }}

                    </RouterLink>

                </li>

                <li class="flex items-center gap-2">

                    <Search class="w-5 h-5 cursor-pointer hover:text-orange-500 transition"/>
                    <input type="text" placeholder="Search..." class="ml-2 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>

                </li>

            </ul>

        </div>

    </div>

</nav>

</template>