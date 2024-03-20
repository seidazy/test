<script setup lang="ts">
import {ref} from "vue";
import Button from "primevue/button";
import Card from "primevue/card";

const note = ref({
  title: '',
  description: ''
})

const emit = defineEmits(['createNote', 'cancelCreate'])

const createNote = () => {
  emit('createNote', note.value)
  note.value = {
    title: '',
    description: ''
  }
}

const cancelCreate = () => {
  note.value = {
    title: '',
    description: ''
  }
  emit('cancelCreate', note)
}

</script>

<template>
  <div class="add-note grid align-items-center justify-content-center">
    <form @submit.prevent="createNote" class="block">
      <Card class="delete-note_content">
        <template #title>Создать заметку</template>
        <template #content>
          <div class="col-12">
            <input class="p-inputtext p-component" v-model="note.title" placeholder="Заголовок" required/>
          </div>
          <div class="col-12">
            <input class="p-inputtext p-component" v-model="note.description" placeholder="Описание" required/>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Отмена" @click="cancelCreate"  class="w-full"  />
            <Button label="Создать" type="submit" class="w-full" />
          </div>
        </template>
      </Card>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add-note {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.3)
}
</style>