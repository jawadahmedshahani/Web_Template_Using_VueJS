<script setup>
import banner from '@/assets/images/about/banner.jpg'
import company from '@/assets/images/about/about-company.jpg'
import mission from '@/assets/images/about/mission.jpg'
import vision from '@/assets/images/about/vision.jpg'
</script>

<template>

    <!-- Banner -->

    <section
        class="relative h-[200px] bg-cover bg-center"
        :style="{ backgroundImage: `url(${banner})` }"
    >

        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative h-full flex items-center justify-center">

            <h1 class="text-5xl font-bold text-white">
                About Us
            </h1>

        </div>

    </section>

    <!-- Company -->

    <section class="py-20">

        <div class="container mx-auto px-6">

            <div class="grid lg:grid-cols-2 gap-12 items-center">

                <img
                    :src="company"
                    class="rounded-lg shadow-lg"
                >

                <div>

                    <h2 class="text-4xl font-bold mb-6">
                        Who We Are
                    </h2>

                    <p class="text-gray-600 leading-8 mb-6">
                        We provide reliable industrial solutions, engineering
                        services and high quality products to different industries.
                        Our goal is to build long-term relationships with clients
                        through quality, safety and innovation.
                      
                    </p>

                    <button
                        class="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition"
                    >
                        Learn More
                    </button>

                </div>

            </div>

        </div>

    </section>

    <!-- Mission & Vision -->

    <section class="bg-gray-100 py-20">

        <div class="container mx-auto px-6">

            <div class="grid lg:grid-cols-2 gap-10">

                <div class="bg-white p-8 rounded-lg shadow">

                    <img
                        :src="mission"
                        class="rounded mb-5"
                    >

                    <h3 class="text-2xl font-bold mb-4">
                        Our Mission
                    </h3>

                    <p class="text-gray-600 leading-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Sapiente obcaecati voluptatum, ipsam earum, nisi distinctio eaque adipisci,
                          ipsum porro eius assumenda ex nemo numquam! Cum unde inventore vitae. Possimus, corporis.
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Sapiente obcaecati voluptatum, ipsam earum, nisi distinctio eaque adipisci,
                          ipsum porro eius assumenda ex nemo numquam! Cum unde inventore vitae. Possimus, corporis.
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Sapiente obcaecati voluptatum, ipsam earum, nisi distinctio eaque adipisci,
                          ipsum porro eius assumenda ex nemo numquam! Cum unde inventore vitae. Possimus, corporis.
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Sapiente obcaecati voluptatum, ipsam earum, nisi distinctio eaque adipisci,
                          ipsum porro eius assumenda ex nemo numquam! Cum unde inventore vitae. Possimus, corporis.
                    </p>

                </div>

                <div class="bg-white p-8 rounded-lg shadow">

                    <img
                        :src="vision"
                        class="rounded mb-5"
                    >

                    <h3 class="text-2xl font-bold mb-4">
                        Our Vision
                    </h3>

                    <p class="text-gray-600 leading-8">
                        To become one of the leading industrial solution
                        providers recognized for quality and excellence.
                    </p>

                </div>

            </div>

        </div>

    </section>

    <!-- Why Choose Us -->

    <section class="py-20">

        <div class="container mx-auto px-6">

            <h2 class="text-4xl font-bold text-center mb-12">
                Why Choose Us
            </h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div class="shadow rounded-lg p-8 text-center">
                    <h3 class="font-bold text-xl mb-3">Quality</h3>
                    <p class="text-gray-600">
                        Premium industrial standards.
                    </p>
                </div>

                <div class="shadow rounded-lg p-8 text-center">
                    <h3 class="font-bold text-xl mb-3">Safety</h3>
                    <p class="text-gray-600">
                        Safety is our highest priority.
                    </p>
                </div>

                <div class="shadow rounded-lg p-8 text-center">
                    <h3 class="font-bold text-xl mb-3">Experience</h3>
                    <p class="text-gray-600">
                        Skilled engineering professionals.
                    </p>
                </div>

                <div class="shadow rounded-lg p-8 text-center">
                    <h3 class="font-bold text-xl mb-3">Support</h3>
                    <p class="text-gray-600">
                        Dedicated customer support.
                    </p>
                </div>

            </div>

        </div>

    </section>

</template>