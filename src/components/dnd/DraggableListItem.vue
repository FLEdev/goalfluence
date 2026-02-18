<template>
    <div class="draggable-list-item">
        {{ props.listIndex + 1 }} -
        {{ props.listItem.name }}
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  listItem: {
    type: Object,
    required: true
  },
  listIndex: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>

</style>