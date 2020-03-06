<template>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">
        {{ title }}
      </p>
    </v-col>
    <v-col
      cols="12"
      sm="12"
      md="10"
      offset-md="1"
      v-for="video in videos"
      :key="video.title"
    >
      <Video :video="video" />
    </v-col>
  </v-row>
</template>

<script>
import Video from "@/components/Video.vue";
export default {
  name: "Videos",
  props: {
    title: {
      type: String,
      require: true
    },
    videos: {
      type: Array,
      require: true
    }
  },
  components: {
    Video
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
