<script setup>
import banner from '@/assets/images/products/banner.jpg'

import product1 from '@/assets/images/products/product-1.jpg'
import product2 from '@/assets/images/products/product-2.jpg'
import product3 from '@/assets/images/products/product-3.jpg'
import product4 from '@/assets/images/products/product-4.jpg'
import product5 from '@/assets/images/products/product-5.jpg'
import product6 from '@/assets/images/products/product-6.jpg'

const products = [
    {
        id: 1,
        title: 'Industrial Equipment',
        image: product1,
        description: 'High quality industrial equipment for modern businesses.'
    },
    {
        id: 2,
        title: 'Safety Products',
        image: product2,
        description: 'Reliable safety products for industrial environments.'
    },
    {
        id: 3,
        title: 'Mechanical Parts',
        image: product3,
        description: 'Premium mechanical parts with high durability.'
    },
    {
        id: 4,
        title: 'Electrical Components',
        image: product4,
        description: 'Industrial electrical solutions and components.'
    },
    {
        id: 5,
        title: 'Construction Materials',
        image: product5,
        description: 'Strong and reliable construction materials.'
    },
    {
        id: 6,
        title: 'Engineering Solutions',
        image: product6,
        description: 'Customized engineering services and solutions.'
    }
]
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
                Products
            </h1>

        </div>

    </section>

    <!-- Products -->

    <section class="py-20">

        <div class="container mx-auto px-6">

            <div class="text-center mb-12">

                <h2 class="text-4xl font-bold">
                    Our Products
                </h2>

                <p class="text-gray-600 mt-4">
                    Explore our industrial product range.
                </p>

            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div
                    v-for="product in products"
                    :key="product.id"
                    class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                    <img
                        :src="product.image"
                        :alt="product.title"
                       class="h-56 w-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                    >

                    <div class="p-6">

                        <h3 class="text-2xl font-semibold mb-3">
                            {{ product.title }}
                        </h3>

                        <p class="text-gray-600 mb-5 leading-7">
                            {{ product.description }}
                        </p>

                        <button
                            class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition"
                        >
                            View Details
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>