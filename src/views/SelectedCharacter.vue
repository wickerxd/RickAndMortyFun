<template>
  <header>
    <img :src="selectedCharacter?.image" alt="" />
    {{ selectedCharacter?.name }}
  </header>
</template>

<script setup lang="ts">
import type { Character } from "@/types";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const selectedCharacter = ref<Character>();

fetch(`https://rickandmortyapi.com/api/character/${route.params.characterId}`)
  .then((items) => {
    console.log(items);
    return items.json();
  })
  .then((val) => {
    selectedCharacter.value = val;
  });
</script>

<style scoped></style>
