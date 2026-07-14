<script setup>
import banner from '@/assets/images/contact/banner.jpg'
import office from '@/assets/images/contact/office.jpg'

import { Phone, Mail, MapPin, Clock3 } from 'lucide-vue-next'
</script>

<template>

    <!-- Banner -->

    <section
        class="relative h-[200px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${banner})` }"
    >
        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative h-full flex items-center justify-center">

            <h1 class="text-5xl text-white font-bold">
                Contact Us
            </h1>

        </div>

    </section>

    <!-- Contact -->

    <section class="py-20">

        <div class="container mx-auto px-6">

            <div class="grid lg:grid-cols-2 gap-12">

                <!-- Left -->

                <div>

                   

                    <div class="space-y-6">

                        <div class="flex items-start gap-4">

                            <Phone class="text-orange-500" />

                            <div>

                                <h3 class="font-semibold text-lg">
                                    Phone
                                </h3>

                                <p class="text-gray-600">
                                    +971 50 1234567
                                </p>

                            </div>

                        </div>

                        <div class="flex items-start gap-4">

                            <Mail class="text-orange-500" />

                            <div>

                                <h3 class="font-semibold text-lg">
                                    Email
                                </h3>

                                <p class="text-gray-600">
                                    info@company.com
                                </p>

                            </div>

                        </div>

                        <div class="flex items-start gap-4">

                            <MapPin class="text-orange-500" />

                            <div>

                                <h3 class="font-semibold text-lg">
                                    Address
                                </h3>

                                <p class="text-gray-600">
                                    Dubai, United Arab Emirates
                                </p>

                            </div>

                        </div>

                        <div class="flex items-start gap-4">

                            <Clock3 class="text-orange-500" />

                            <div>

                                <h3 class="font-semibold text-lg">
                                    Working Hours
                                </h3>

                                <p class="text-gray-600">
                                    Mon - Sat | 8:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>

                    </div>
                    <br>
                
                     <img
                        :src="office"
                        alt="Office"
                        class="rounded-lg shadow-lg mb-8 h-[400px]"
                    >

                </div>

                <!-- Right -->

                <div>

                    <h2 class="text-4xl font-bold mb-8">
                        Send Us A Message
                    </h2>

                    <form class="space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            class="w-full border rounded-lg p-4 outline-none focus:border-orange-500"
                        >

                        <input
                            type="email"
                            placeholder="Email Address"
                            class="w-full border rounded-lg p-4 outline-none focus:border-orange-500"
                        >

                        <input
                            type="text"
                            placeholder="Subject"
                            class="w-full border rounded-lg p-4 outline-none focus:border-orange-500"
                        >

                        <textarea
                            rows="15"
                            placeholder="Message"
                            class="w-full border rounded-lg p-4 outline-none focus:border-orange-500"
                        ></textarea>

                        <button
                            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition justify-center flex items-center gap-6"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>

    </section>

    <!-- Google Map -->

    <section>

        <iframe
            class="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb="
            loading="lazy"
        ></iframe>

    </section>

</template>