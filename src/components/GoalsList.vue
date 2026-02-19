<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

const { listValue } = defineProps(['listValue'])

/*
const el = ref()
onMounted(() => {
    el.value // <div>
    console.info(listValue) // {default: 'My Goals Listttt'}
}) */

watchEffect(() => {
  // runs only once before 3.5
  // re-runs when the "foo" prop changes in 3.5+
  console.log(listValue)
})
</script>

<template>
  <div ref="el">{{ listValue }}</div>
</template>