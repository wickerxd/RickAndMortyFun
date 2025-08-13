import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Index.vue";
import EpisodesView from "../views/Episodes.vue";
import CharactersView from "../views/Characters.vue";
import SelectedCharacterView from "../views/SelectedCharacter.vue";
import LocationsView from "../views/Locations.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters",
      name: "characters",
      component: CharactersView,
    },
    {
      path: "/characters/:characterId",
      name: "selected_chracacter",
      component: SelectedCharacterView,
    },
    {
      path: "/locations",
      name: "locations",
      component: LocationsView,
    },
    {
      path: "/episodes",
      name: "episodes",
      component: EpisodesView,
    },
  ],
});

export default router;
