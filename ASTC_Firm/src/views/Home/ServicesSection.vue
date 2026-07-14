<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import service1 from '@/assets/images/services/service-1.jpg'
import service2 from '@/assets/images/services/service-2.jpg'
import service3 from '@/assets/images/services/service-3.jpg'
import service4 from '@/assets/images/services/service-4.jpg'
import service5 from '@/assets/images/services/service-5.jpg'
import service6 from '@/assets/images/services/service-6.jpg'
import service7 from '@/assets/images/services/service-7.jpg'
import service8 from '@/assets/images/services/service-8.jpg'

const services = [
    {
        title: 'Engineering',
        image: service1
    },
    {
        title: 'Maintenance',
        image: service2
    },
    {
        title: 'Fabrication',
        image: service3
    },
    {
        title: 'Industrial Solutions',
        image: service4
    },
    {
        title: 'Consulting',
        image: service5
    },
    {
        title: 'Project Management',
        image: service6
    },
    {
        title: 'Safety & Compliance',
        image: service7
    },
    {
        title: 'Training & Development',
        image: service8
    }
]
</script>

<template>

<section class="bg-gray-100 py-20">

    <div class="container mx-auto px-6">

        <h2 class="text-4xl font-bold text-center mb-12">
            Our Services
        </h2>

        <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            navigation
            :pagination="{ clickable: true }"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false
            }"
            :breakpoints="{
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 4
                }
            }"
            class="pb-14"
        >

            <SwiperSlide
                v-for="service in services"
                :key="service.title"
            >

                <div class="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300">

                    <img
                        :src="service.image"
                        class="h-56 w-full object-cover hover:scale-110 transition duration-300"
                    >

                    <div class="p-6">

                        <h3 class="text-xl font-semibold text-center">
                            {{ service.title }}
                        </h3>

                    </div>

                </div>

            </SwiperSlide>

        </Swiper>

    </div>

</section>

</template>