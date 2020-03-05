<template>
  <v-expansion-panel-content>
    <p class="timeline-headline" v-if="timeline.date">
      {{ timeline.title }} |
      <v-icon>mdi-calendar-range</v-icon>
      <span class="timeline-date">{{ timeline.date }}</span>
    </p>
    <p class="timeline-headline" v-else>
      {{ timeline.title }}
    </p>
    <p class="timeline-place">
      <v-icon>mdi-map-marker</v-icon>{{ timeline.place }}
    </p>
    <p>{{ timeline.content }}</p>
  </v-expansion-panel-content>
</template>

<script>
export default {
  name: "TimelineItem",
  props: {
    timeline: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.timeline-headline {
  font-size: 1.2em;
  font-weight: bold;
  .timeline-date {
    margin-left: 0.5%;
    font-size: 0.8em;
    font-style: italic;
    font-weight: 300;
  }
  .timeline-place {
    margin-left: 0.5%;
    font-size: 0.8em;
    font-style: italic;
    font-weight: 300;
  }
}
</style>