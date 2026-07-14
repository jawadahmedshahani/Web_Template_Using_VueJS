<script setup>
import heroBg from '@/assets/images/hero/hero-bg.jpg'
import heroBanner from '@/assets/images/hero/hero-banner.jpg'
</script>

<template>
    <section
        class="relative bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${heroBg})` }"
    >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- Content -->
        <div
            class="relative container mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12"
        >

            <!-- Left -->
            <div class="text-white lg:w-1/2">

                <p class="uppercase tracking-[4px] text-orange-400 font-semibold mb-4">
                    Welcome To ASTC
                </p>

                <h1 class="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                    Industrial Solutions
                    For Modern Business
                </h1>

                <p class="text-gray-300 mb-8 leading-8">
                    We provide innovative industrial solutions with
                    quality, safety and reliability for businesses
                    across different industries.
                </p>

                <button
                    class="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-md font-semibold"
                >
                    Learn More
                </button>

            </div>

            <!-- Right -->

            <div class="lg:w-1/2 flex justify-center ">

                <img
                    :src="heroBanner"
                    alt="Hero Image"
                    class="w-full max-w-xl hover:scale-105 transition-transform"
                >

            </div>

        </div>
    </section>
</template>