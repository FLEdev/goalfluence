<script setup  lang="ts">
import DraggableListItem from '@/components/dnd/DraggableListItem.vue';
import { ref, onMounted, watchEffect } from 'vue'
import draggable from "vuedraggable";

const draggableList = ref([
  {
    "name": "vue.draggable",
    "order": 1,
    "fixed": false
  },
  {
    "name": "draggable",
    "order": 2,
    "fixed": false
  },
  {
    "name": "component",
    "order": 3,
    "fixed": false
  },
  {
    "name": "for",
    "order": 4,
    "fixed": false
  },
  {
    "name": "vue.js 2.0",
    "order": 5,
    "fixed": false
  },
  {
    "name": "based",
    "order": 6,
    "fixed": false
  },
  {
    "name": "on",
    "order": 7,
    "fixed": false
  },
  {
    "name": "Sortablejs",
    "order": 8,
    "fixed": false
  }
]);
</script>

<template>
  <draggable v-model="draggableList" tag="ul">
    <template #item="{ element: draggableListItem, index: draggableListIndex }">
        <DraggableListItem :list-item="draggableListItem" :list-index="draggableListIndex"></DraggableListItem>
    </template>
  </draggable>


</template>

<style scoped>

</style>