<script setup>
import brand1 from '@/assets/images/brands/brand-1.jpg'
import brand2 from '@/assets/images/brands/brand-2.jpg'
import brand3 from '@/assets/images/brands/brand-3.jpg'
import brand4 from '@/assets/images/brands/brand-4.jpg'
import brand5 from '@/assets/images/brands/brand-5.jpg'
import brand6 from '@/assets/images/brands/brand-6.jpg'

const brands=[
brand1,
brand2,
brand3,
brand4,
brand5,
brand6
]
</script>

<template>

<section class="bg-gray-100 py-20">

<div class="container mx-auto px-6">

<h2 class="text-center text-4xl font-bold mb-12">
Brands & Partners
</h2>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

<img
v-for="brand in brands"
:src="brand"
class="mx-auto h-20 object-contain transition hover:scale-130 animation-transform"
/>

</div>

</div>

</section>

</template>