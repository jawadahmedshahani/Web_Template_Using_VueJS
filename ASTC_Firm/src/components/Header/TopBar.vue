<script setup>
import { Phone, Mail, Clock3,Facebook,Instagram } from 'lucide-vue-next'
</script>

<template>
    <div class="bg-gray-100 text-black text-lg shadow-md">
        <div class="container mx-auto flex justify-between items-center py-2 px-4">

            <!-- Left -->
            <div class="flex items-center gap-6">

                <div class="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer">
                    <Phone class="w-4 h-4" />
                    <span>+971 50 123 4567</span>
                </div>

                <div class="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer">
                    <Mail class="w-4 h-4" />
                    <span>info@company.com</span>
                </div>

            </div>

            <!-- Right -->
          
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-orange-500 transition">
                    <Facebook class="w-6 h-6" />
                </a>
                <a href="#" class="hover:text-orange-500 transition">
                    <Instagram class="w-6 h-6" />
                </a>
                <button class="bg-blue-500 hover:bg-orange-600 text-white px-4 py-1 rounded transition">
                    Get a Quote
                </button>
            </div>    

        </div>
    </div>
</template>