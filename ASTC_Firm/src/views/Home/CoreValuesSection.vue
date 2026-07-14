<script setup>
import { ShieldCheck, Award, Users, Lightbulb } from 'lucide-vue-next'

const values = [
{
title:'Integrity',
icon:ShieldCheck
},
{
title:'Quality',
icon:Award
},
{
title:'Team Work',
icon:Users
},
{
title:'Innovation',
icon:Lightbulb
}
]
</script>

<template>

<section class="py-20">

<div class="container mx-auto px-6">

<h2 class="text-4xl text-center font-bold mb-12">
Core Values
</h2>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div
v-for="value in values"
:key="value.title"
class="text-center p-8 shadow rounded-lg hover:scale-120 transition-transform backdrop:blur-sm bg-blue-500/30"
>

<component
:is="value.icon"
class="mx-auto w-12 h-12 text-orange-500 mb-5"
/>

<h3 class="font-semibold text-xl">

{{ value.title }}

</h3>

</div>

</div>

</div>

</section>

</template>