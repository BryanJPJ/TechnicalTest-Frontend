<script setup>
import { RouterLink, RouterView } from 'vue-router';
import {useEventsStore} from './stores/iTunesStore';
import { onBeforeMount } from 'vue';
import Card from "./components/Card.vue";

const store = useEventsStore();

onBeforeMount(async () => {
  await store.fetchEvents();
  console.log(store.Events[0]);
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div  id="cardContainer" >
  <div v-for="event in store.Events[0]" :key="event" id="cardFor">
    <Card
    :title="event.title.label" 
    :name="event['im:name'].label"
    :image="event['im:image'][2].label"
    />
  </div>
</div>
  <RouterView />
</template>

<style scoped>
#cardContainer{
  /* width: 10em; */
  height: 10em;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
}
#cardFor{
  display: flex;
  flex-wrap: wrap;
}
</style>
