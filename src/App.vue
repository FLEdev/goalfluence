<script setup lang="ts">

import GoalsList from '@/components/GoalsList.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
  <header class="min-h-30 bg-gray-800 text-red-500 flex items-center">
    <HeaderMenu></HeaderMenu>
  </header>

  <main class="min-h-screen bg-gray-50 p-8 mt-12">
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
