<script setup>
import { Phone, Mail, Clock3 } from 'lucide-vue-next'
</script>

<template>
    <div class="bg-gray-500 text-white text-sm">
        <div class="container mx-auto flex justify-between items-center py-2 px-4">

            <!-- Left -->
            <div class="flex items-center gap-6">

                <div class="flex items-center gap-2">
                    <Phone class="w-4 h-4" />
                    <span>+971 50 123 4567</span>
                </div>

                <div class="flex items-center gap-2">
                    <Mail class="w-4 h-4" />
                    <span>info@company.com</span>
                </div>

            </div>

            <!-- Right -->
            <div class="flex items-center gap-2">
                <Clock3 class="w-4 h-4" />
                <span>Mon - Sat : 8:00 AM - 6:00 PM</span>
            </div>

        </div>
    </div>
</template>