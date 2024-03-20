<script setup lang="ts">
import { ref } from 'vue';

import Card from 'primevue/card';
import Button from 'primevue/button';

import DeleteNoteComponent from '@/components/DeleteNote.vue'
import AddNote from "@/components/AddNote.vue";

const notes = ref([
  { id: 1, title: 'Заметка 1',  description: 'lorem1' },
  { id: 2, title: 'Заметка 2', description: 'lorem2' },
  { id: 3, title: 'Заметка 3', description: 'lorem3' }
]);

const selectedNote = ref(null);
const isCreateModalVisible = ref(false);

const showDeleteModal = (note) => {
  selectedNote.value = note;
};

const showCreateModal = () => {
  isCreateModalVisible.value = true;
};

const deleteNote = (note) => {
  const index = notes.value.findIndex(n => n.id === note.id);
  if (index !== -1) {
    notes.value.splice(index, 1);
  }
  selectedNote.value = null;
};

const cancelDelete = () => {
  selectedNote.value = null;
};

const addNoteToList = (note) => {
  notes.value.push(note)
  isCreateModalVisible.value = false;
}

const cancelCreate = () => {
  isCreateModalVisible.value = false;
}
</script>

<template>
  <div class="note_container">
    <h2>Список заметок</h2>
    <div class="grid">
      <div class="col sm:col-6 md:col-6 lg:col" v-for="note in notes" :key="note.id">
        <Card class="note">
          <template #title>{{ note.title }}</template>
          <template #content>
            <p class="m-0">
              {{ note.description }}
            </p>
          </template>
          <template #footer>
            <div class="flex gap-3 mt-1">
              <Button label="Удалить" @click="showDeleteModal(note)" class="w-full" />
            </div>
          </template>
        </Card>
      </div>
      <Button label="Добавить заметку" @click="showCreateModal" class="w-full" />
      </div>
  </div>
  <DeleteNoteComponent v-if="selectedNote" :note="selectedNote" @delete="deleteNote" @cancel="cancelDelete"/>
  <AddNote v-if="isCreateModalVisible" @createNote="addNoteToList" @cancelCreate="cancelCreate"/>
</template>

<style lang="scss">
.note {
  position: relative;

  &_container {
    padding: 20px;
  }

}
</style>