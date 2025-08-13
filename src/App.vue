<template>
  <Suspense>
    <div class="container">
      <header>
        <h1>Rick and morty something</h1>

        <p>
          Visit
          <a href="https://vuejs.org/" target="_blank" rel="noopener"
            >vuejs.org</a
          >
          to read the documentation
        </p>
      </header>

      <nav class="menu-items">
        <router-link to="/characters">Characters</router-link>
        <router-link to="/locations">Locations</router-link>
        <router-link to="/episodes">Episodes</router-link>
      </nav>

      <RouterView />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.menu-items {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.container {
  width: 100%;

  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
