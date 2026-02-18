<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

const { listValue } = defineProps(['listValue'])

const el = ref()


watchEffect(() => {
  // runs only once before 3.5
  // re-runs when the "foo" prop changes in 3.5+
  console.log(listValue)
})
</script>

<template>

    <footer class="bg-gray-800 text-white p-8 mt-12">
    <div className="max-w-4xl mx-auto">
      <div class="text-end">&copy; 2026 GoalFluence</div>
    </div>
    </footer>
</template>