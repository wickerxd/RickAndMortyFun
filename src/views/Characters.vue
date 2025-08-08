<template>
  <header>Home</header>

  <section v-if="characters.length > 0">
    <div v-for="char in characters">
      {{ char.name }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const characters = ref<Record<string, unknown>[]>([]);

const doGetChars = fetch("https://rickandmortyapi.com/api/character")
  .then((items) => {
    return items.json();
  })
  .then((val) => {
    characters.value = val.results;
  });

console.log(await doGetChars);
</script>

<style scoped></style>
