import { defineStore } from "pinia";

export const useEventsStore = defineStore({
  id: "Events", 
  state: () => ({
    Events: [],
  }),
  actions: {
    async fetchEvents() {
      const response = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
      const responseJson = await response.json();
      let allPodcasts = responseJson.feed.entry;
      this.Events.push(allPodcasts)
      // console.log('podcast array', this.Events);
    },
  },
});