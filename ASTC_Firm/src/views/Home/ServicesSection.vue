<script setup>
import service1 from '@/assets/images/services/service-1.jpg'
import service2 from '@/assets/images/services/service-2.jpg'
import service3 from '@/assets/images/services/service-3.jpg'
import service4 from '@/assets/images/services/service-4.jpg'

const services = [
    {
        title:'Engineering',
        image:service1
    },
    {
        title:'Maintenance',
        image:service2
    },
    {
        title:'Fabrication',
        image:service3
    },
    {
        title:'Industrial Solutions',
        image:service4
    }
]
</script>

<template>

<section class="bg-gray-100 py-20">

<div class="container mx-auto px-6">

<h2 class="text-4xl font-bold text-center mb-12">
Our Services
</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div
v-for="service in services"
:key="service.title"
class="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
>

<img
:src="service.image"
class="h-56 w-full object-cover hover:scale-150 transition-transform"
>

<div class="p-6">

<h3 class="text-xl font-semibold">
{{ service.title }}
</h3>

</div>

</div>

</div>

</div>

</section>

</template>