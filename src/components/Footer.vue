<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

const { listValue } = defineProps(['listValue'])

const el = ref()
</script>

<template>

    <footer class="bg-gray-800 text-white p-8 mt-12">
    <div className="max-w-4xl mx-auto">
      <div class="text-end">&copy; 2026 GoalFluence</div>
    </div>
    </footer>
</template>