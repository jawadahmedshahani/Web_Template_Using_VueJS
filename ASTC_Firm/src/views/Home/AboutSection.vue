<script setup>
import aboutImage from '@/assets/images/about/about-company.jpg'
</script>

<template>
<section class="py-20">
    <div class="container mx-auto px-6">

        <div class="grid lg:grid-cols-2 gap-12 items-center ">

            <div>
                <img
                    :src="aboutImage"
                    alt="About"
                    class="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
                >
            </div>

            <div>

  
                <h2 class="text-4xl font-bold mb-6">
                    Delivering Industrial Excellence
                </h2>

                <p class="text-gray-600 leading-8 mb-6">
                    We specialize in providing reliable industrial solutions,
                    engineering services and innovative technologies that
                    ensure quality, efficiency and customer satisfaction.
                </p>

                <button
                    class="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition"
                >
                    Read More
                </button>

            </div>

        </div>

    </div>
</section>
</template>