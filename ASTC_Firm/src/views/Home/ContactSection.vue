<script setup>
import { Phone, Mail, MapPin } from 'lucide-vue-next'
</script>

<template>

<section class="py-20">

<div class="container mx-auto px-6">

<div class="bg-blue-900 rounded-xl p-10 text-white">

<h2 class="text-4xl font-bold mb-10">
Contact Us
</h2>

<div class="grid md:grid-cols-3 gap-8">

<div class="flex gap-4">

<Phone />

<div>

<h4 class="font-semibold">
Phone
</h4>

<p>
+971 50 1234567
</p>

</div>

</div>

<div class="flex gap-4">

<Mail />

<div>

<h4 class="font-semibold">
Email
</h4>

<p>
info@company.com
</p>

</div>

</div>

<div class="flex gap-4">

<MapPin />

<div>

<h4 class="font-semibold">
Location
</h4>

<p>
Dubai, UAE
</p>

</div>

</div>

</div>

</div>

</div>

</section>

</template>