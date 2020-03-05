<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">{{ title }}</p>
    </v-col>
    <v-col cols="12" md="10" offset-md="1" sm="12">
      <v-expansion-panels inset focusable hover>
        <v-expansion-panel v-for="item in items" :key="item.id">
          <v-expansion-panel-header>{{ item.date }}</v-expansion-panel-header>
          <TimelineItem
            v-for="timeline in item.timeline"
            :key="timeline.id"
            :timeline="timeline"
          />
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
import TimelineItem from "@/components/TimelineItem.vue";
export default {
  name: "Timeline",
  components: {
    TimelineItem
  },
  props: {
    title: {
      type: String,
      require: true
    },
    items: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      date: 2019
    };
  }
};
</script>

<style lang="scss" scoped>
.headline-text {
  font-size: 2em;
  font-weight: 300;
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
}
</style>