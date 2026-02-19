<script setup  lang="ts">
import DraggableListItem from '@/components/dnd/DraggableListItem.vue';
import { ref, onMounted, watchEffect } from 'vue'
import draggable from "vuedraggable";

const draggableList = ref([
  {
    "name": "Early Breakfast",
    "location": 'Rome, Italy, at the hotel',
    "time": '7:20 AM',
    "icon": 'mdi-food'
  },
  {
    "name": "Visit the Colosseum",
    "location": 'Rome, Italy, colonneum',
    "time": '9:10 AM',
    "icon": 'mdi-arch'
  },  
  {
    "name": "visit the Vatican",
    "location": 'Rome, Italy, Vatican',
    "time": '12:30 AM',
    "icon": 'mdi-church'
  }, 
  {
    "name": "Visit the art museum",
    "location": 'Rome, Italy, center of Rome',
    "time": '15:30 AM',
    "icon": 'mdi-palette'
  },
{
    "name": "Visit a popular restaurant",
    "location": 'Rome, Italy, center of Rome',
    "time": '17:20 AM',
    "icon": 'mdi-food'
  },
]);
</script>

<template>
  <v-expansion-panels
      variant="accordion"
      multiple
      class="w-full"
  >
    <draggable v-model="draggableList" tag="ul">
      <template #item="{ element: draggableListItem, index: draggableListIndex }">
          <DraggableListItem :list-item="draggableListItem" :list-index="draggableListIndex"></DraggableListItem>
      </template>
    </draggable>
  </v-expansion-panels>

</template>

<style scoped>

</style>





