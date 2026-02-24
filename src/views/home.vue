<template>
    <div class="home">
        <h1>Welcome to Goalfluence</h1>
        <p>Your Travel Itinerary Platform</p>
    </div>

    <v-expansion-panels
      variant="accordion"
      multiple
      class="w-full"
  >
    <draggable v-model="draggableList" tag="ul" itemKey="name">
      <template #item="{ element: draggableListItem, index: draggableListIndex }">
          <DraggableListItem :list-item="draggableListItem" :list-index="draggableListIndex"></DraggableListItem>
      </template>
    </draggable>
  </v-expansion-panels>
<v-btn color="primary" class="mt-4">Create New Itinerary</v-btn>

</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

import draggable from "vuedraggable";
import DraggableListItem from '@/components/dnd/DraggableListItem.vue';

const draggableList = ref([
  {
    "name": "Early Breakfast",
    "location": 'Rome, Italy, at the hotel',
    "time": '7:20 AM',
    "icon": 'icon-warehouse'
  },
  {
    "name": "Early Breakfast",
    "location": 'Rome, Italy, at the hotel',
    "time": '7:20 AM',
    "icon": 'icon-cart-arrow-down'
  },
  {
    "name": "Early Breakfast",
    "location": 'Rome, Italy, at the hotel',
    "time": '7:20 AM',
    "icon": 'icon-food'
  },

]);
</script>

<style scoped>

</style>
