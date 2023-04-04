<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onBeforeMount, ref, computed } from 'vue';
import EventsStore from "./stores/iTunesStore"
import Card from "./components/Card.vue";
import Filter from './components/Filter.vue';

const store = new EventsStore();
const stores = ref([]);
const searchPodcast = ref("");

onBeforeMount(async () => {
  await store.fetchAllEvents();
  stores.value = store.getEvents() ;
  // const arrayPodcasts = store.Events[0];
  
});

const filteredPodcasts = computed(() => {
  if(!searchPodcast.value) return stores.value
  return stores.value.filter(event =>
  event['im:name'].label.toLowerCase().includes(searchPodcast.value.toLowerCase()) ||
  event['im:artist'].label.toLowerCase().includes(searchPodcast.value.toLowerCase())
  )
})

</script>

<template>
  <header>
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4 fw-bold" id="titleMain">Podcaster</span>
      </a>
      
    </header>
  </div>
  </header>
  <main>
    
  <Filter v-model="searchPodcast"/>
 
  <div  id="cardContainer" >
    <Card v-for="event in filteredPodcasts" :event="event"/>
 
  </div>

</main>
  <RouterView />
</template>

<style scoped>
a:link, a:visited, a:active {
    text-decoration:none;
}
#titleMain{
  color: blue;
}
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
#numberPodcasts{
  font-size: large;
  margin-right: 1em;
}
</style>
