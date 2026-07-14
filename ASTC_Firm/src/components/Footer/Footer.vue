<script setup>
import logoWhite from '@/assets/logos/logo-white.svg'

import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Linkedin
} from 'lucide-vue-next'
</script>

<template>

<footer class="bg-slate-900 text-gray-300">

    <div class="container mx-auto px-6 py-16">

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            <!-- Company -->

            <div>

                <img
                    :src="logoWhite"
                    alt="Logo"
                    class="h-14 mb-5"
                >

                <p class="leading-7">
                    We provide innovative industrial solutions with quality,
                    safety and customer satisfaction.
                </p>

            </div>

            <!-- Quick Links -->

            <div>

                <h3 class="text-white text-xl font-semibold mb-5">
                    Quick Links
                </h3>

                <ul class="space-y-3">

                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/products">Products</RouterLink>
                    </li>

                    <li>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </li>

                </ul>

            </div>

            <!-- Contact -->

            <div>

                <h3 class="text-white text-xl font-semibold mb-5">
                    Contact
                </h3>

                <div class="space-y-4">

                    <div class="flex gap-3">

                        <Phone class="w-5"/>

                        <span>+971 50 1234567</span>

                    </div>

                    <div class="flex gap-3">

                        <Mail class="w-5"/>

                        <span>info@company.com</span>

                    </div>

                    <div class="flex gap-3">

                        <MapPin class="w-5"/>

                        <span>Dubai, UAE</span>

                    </div>

                </div>

            </div>

            <!-- Social -->

            <div>

                <h3 class="text-white text-xl font-semibold mb-5">
                    Follow Us
                </h3>

                <div class="flex gap-4">

                    <Facebook class="cursor-pointer"/>

                    <Instagram class="cursor-pointer"/>

                    <Linkedin class="cursor-pointer"/>

                </div>

            </div>

        </div>

    </div>

    <div class="border-t border-gray-700">

        <div class="container mx-auto px-6 py-5 text-center text-sm">

            © 2026 ASTC. All Rights Reserved.

        </div>

    </div>

</footer>

</template>