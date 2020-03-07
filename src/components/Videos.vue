<template>
  <v-row justify="center">
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
      <v-skeleton-loader
        ref="skeleton"
        :loading="onLoad"
        type="card-heading,image"
        min-height="100%"
      >
        <span class="video-title">{{ video.title }}</span>
        <Video :video="video" />
      </v-skeleton-loader>
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
  data() {
    return {
      onLoad: true
    };
  },
  components: {
    Video
  },
  mounted() {
    setTimeout(() => {
      this.onLoad = false;
    }, 1000);
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
.video-title {
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
}
</style>
