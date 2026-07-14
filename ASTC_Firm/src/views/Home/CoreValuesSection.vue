<script setup>
import {
    ShieldCheck,
    Award,
    Users,
    Lightbulb
} from 'lucide-vue-next'

const values = [
    {
        title: 'Integrity',
        description: 'We maintain honesty, transparency and ethical standards in every engineering project to build long-term trust with our clients.',
        icon: ShieldCheck
    },
    {
        title: 'Quality',
        description: 'Every solution is delivered with precision, reliability and uncompromising quality standards from start to finish.',
        icon: Award
    },
    {
        title: 'Team Work',
        description: 'Strong collaboration and mutual respect allow our team to successfully complete challenging industrial projects.',
        icon: Users
    },
    {
        title: 'Innovation',
        description: 'We embrace modern technologies and innovative engineering ideas to deliver smarter and more efficient solutions.',
        icon: Lightbulb
    }
]
</script>
<template>

<section class="py-20 bg-slate-50">

<div class="container mx-auto px-6">

    <div class="text-center mb-14">

        <h2 class="text-4xl font-bold">
            Core Values
        </h2>

        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our values define the way we work, innovate and build lasting relationships with our clients.
        </p>

    </div>

    <div class="max-w-5xl mx-auto">

        <div
            v-for="(value,index) in values"
            :key="value.title"
            class="grid md:grid-cols-12 gap-8 py-8"
        >

            <!-- Left Side -->

            <div class="md:col-span-4 flex">

                <!-- Timeline -->

                <div class="flex flex-col items-center mr-6">

                    <div
                        class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center shadow"
                    >

                        <component
                            :is="value.icon"
                            class="w-8 h-8 text-orange-500"
                        />

                    </div>

                    <!-- Vertical Line -->

                    <div
                        v-if="index != values.length-1"
                        class="w-[3px] flex-1 bg-gradient-to-b from-orange-500 via-orange-300 to-blue-500 min-h-28 mt-3 rounded-full"
                    ></div>

                </div>

                <!-- Heading -->

                <div class="pt-4">

                    <h3 class="text-2xl font-bold text-slate-800">

                        {{ value.title }}

                    </h3>

                </div>

            </div>

            <!-- Right Side -->

            <div class="md:col-span-8 flex items-center">

                <div
                    class="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-xl transition duration-300"
                >

                    <p class="text-gray-600 leading-8">

                        {{ value.description }}

                    </p>

                </div>

            </div>

        </div>

    </div>

</div>

</section>

</template>