<script setup>
import {ref, watch} from "vue";
import { defineEmits} from "vue";

const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const searchTerm = ref(props.modelValue);
watch(searchTerm, newValue => {
    emit("update:modelValue", newValue);
});
</script>
<template>
<div class="container mb-5">
    <div class="d-flex justify-content-end">
      <span class="badge rounded-pill bg-primary" id="numberPodcasts">100</span>
<input type="text" placeholder="Filter podcasts..." id="buscadorCard" v-model="searchTerm">
    </div>
  </div>
</template>
<style>
</style>