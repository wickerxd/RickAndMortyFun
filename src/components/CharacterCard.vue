<template>
  <div class="character_card">
    <img :src="character.image" alt="" />
    <section class="character_details">
      <p>{{ character.name }}</p>
      <RouterLink :to="`/characters/${character.id}`" class="character_button"
        >More info</RouterLink
      >
    </section>
  </div>
</template>

<script setup lang="ts">
import { type Character } from "@/types/index.ts";

const props = defineProps<{ character: Character }>();
</script>

<style scoped>
p {
  margin: 0;
}

.character_card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.75rem;
  border-width: 1px !important;
  border-style: solid;
  border-color: #ef4444;
  max-height: 450px;
  max-width: 250px;
}

.character_details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #000000;
}

.character_button {
  margin-left: auto;
  width: fit-content;
  padding: 0.5em;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #000000;
}

@media (min-width: 320px) {
  .character_card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.75rem;
    border-width: 1px !important;
    border-style: solid;
    border-color: #ef4444;
    max-height: 450px;
    max-width: 250px;
  }
}

@media (min-width: 900px) {
  .character_card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.75rem;
    border-width: 1px !important;
    border-style: solid;
    border-color: #ef4444;
    max-height: 450px;
    max-width: 250px;
  }
}
</style>
