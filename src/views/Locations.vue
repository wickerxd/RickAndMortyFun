<template>
  <header>Home</header>

  <section v-if="locations.length > 0">
    <div v-for="char in locations">
      {{ char.name }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const locations = ref<Record<string, unknown>[]>([]);

const doGetLocations = fetch("https://rickandmortyapi.com/api/location")
  .then((items) => {
    return items.json();
  })
  .then((val) => {
    locations.value = val.results;
  });

console.log(await doGetLocations);
</script>

<style scoped></style>
