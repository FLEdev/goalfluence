<script setup lang="ts">

import HeaderMenu from '@/components/HeaderMenu.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <header class="min-h-30 bg-gray-800 text-red-500 flex items-center">
    <div class="me-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-100">Goalfluence</h1>
    </div>  
    <HeaderMenu></HeaderMenu>
  </header>

  <main class="min-h-screen bg-gray-50 p-8 pt-12">
    <div className="max-w-4xl mx-auto">
      <RouterView />
    </div>
  </main>
  <Footer/>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
