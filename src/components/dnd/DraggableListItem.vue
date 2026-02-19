<template>
  <div class="draggable-list-item">
      <v-expansion-panel :key="props.listIndex" class="min-w-100 mb-3">
      <v-expansion-panel-title>
       <v-icon icon="fa:fas fa-lock"></v-icon>
        <v-icon icon="{{ props.listItem.icon }}"></v-icon> #{{ props.listIndex + 1 }} {{ props.listItem.time }}
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