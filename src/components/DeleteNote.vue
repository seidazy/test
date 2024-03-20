<script setup lang="ts">
import Card from 'primevue/card';
import Button from "primevue/button";

defineProps<{
  note?: { title: string }
}>()

const emit = defineEmits(['delete', 'cancel'])

const deleteNote = (note) => {
  emit('delete', note);
};

const cancelDelete = () => {
  emit('cancel');
};

</script>

<template>
  <div class="delete-note grid align-items-center justify-content-center">
    <Card class="delete-note_content">
      <template #title>Удалить заметку</template>
      <template #content>
        <p class="m-0">
          Вы уверены, что хотите удалить заметку "{{ note?.title }}"?
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="Отмена" @click="cancelDelete" class="w-full"   />
          <Button label="Удалить" @click="deleteNote(note)" class="w-full" severity="danger"/>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" scoped>
.delete-note {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.3)
}

</style>