<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1">
        <Videos title="Blog" :videos="arrayVideo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Videos from "@/components/Videos.vue";
export default {
  name: "Blog",
  components: {
    Videos
  },
  data() {
    return {
      arrayVideo: [
        {
          title: "Vidéo test",
          src: "https://www.youtube.com/embed/Z3OjKkvicHo"
        },
        {
          title: "Vidéo",
          src: "https://www.youtube.com/embed/Z3OjKkvicHo"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
