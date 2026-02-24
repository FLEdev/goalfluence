<template>

  <div class="draggable-list-item">
      <v-expansion-panel :key="props.listIndex" class="min-w-100 mb-10">
      <v-expansion-panel-title>

        <i class="icon" :class="props.listItem.icon"></i>
          #{{ props.listIndex + 1 }} {{ props.listItem.time }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ props.listItem.name }}
      </v-expansion-panel-text>
    </v-expansion-panel>
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