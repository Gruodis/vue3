<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="mt-3 text-gray-50 font-semibold flex gap-3">
        <RouterLink active-class="activeLink" to="/" class="hover:text-amber-400">Home</RouterLink>
        <RouterLink active-class="activeLink" to="/about" class="hover:text-amber-400">About</RouterLink>
    </nav>
</template>

<style scoped>
.activeLink {
    @apply font-semibold border-b-2 border-amber-500;
}
</style>
