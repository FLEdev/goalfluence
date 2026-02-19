<script setup lang="ts">
  import { ref, onMounted, watchEffect } from 'vue'

  const el = ref([]); 
  const MenuClass = ref('rounded-md px-3 py-2 font-medium text-gray-100 hover:bg-white/5 hover:text-white'); 
  const MobileMenuClass = ref('block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-white/5 hover:text-white'); 
</script>

<template>
  <nav class="relative bg-color-header font-medium">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <RouterLink :to="{ name: 'home'}" :class="MenuClass">Home</RouterLink>
            <RouterLink :to="{ name: 'about'}" :class="MenuClass">About</RouterLink>
            <RouterLink :to="{ name: 'recent'}" :class="MenuClass">Recent</RouterLink>
            <RouterLink :to="{ name: 'shared'}" :class="MenuClass">Shared</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="mobile-menu" hidden class="block sm:hidden">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <RouterLink :to="{ name: 'home'}" :class="MobileMenuClass">Home</RouterLink>
      <RouterLink :to="{ name: 'about'}" :class="MobileMenuClass">About</RouterLink>
      <RouterLink :to="{ name: 'recent'}" :class="MobileMenuClass">Recent</RouterLink>
      <RouterLink :to="{ name: 'shared'}" :class="MobileMenuClass">Shared</RouterLink>
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
      <a href="#" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
   </div>
  </div>
</nav>
</template>