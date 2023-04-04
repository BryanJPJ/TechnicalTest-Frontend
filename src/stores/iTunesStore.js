import { ref } from "vue";
import axios from "axios";

class EventsStore {
  events;
  url="https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  constructor() {
    this.events = ref([]);
  }

  getEvents() {
    return this.events.value;
  }

  async fetchAllEvents() {
    try {
      await axios.get(this.url).then((response) => {
        this.events.value = response.data.feed.entry;
      });
    } catch (err) {}
  }
}

export default EventsStore;