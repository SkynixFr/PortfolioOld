<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">
        {{ title }}
      </p>
    </v-col>
    <Project
      v-for="project in arrayProjects"
      :key="project.name"
      :project="project"
    />
  </v-row>
</template>

<script>
import Project from "@/components/Project.vue";
export default {
  name: "Projects",
  props: {
    title: {
      type: String,
      require: true
    }
  },
  components: {
    Project
  },
  data() {
    return {
      arrayProjects: [
        {
          name: "Co-op",
          image: "images/co-op.png",
          content: "Projet VueJs",
          github: "https://github.com/SkynixFr/Co-op",
          languages: ["VueJs", "Axios", "Vuex"]
        },
        {
          name: "Redsquare",
          image: "images/record.png",
          content: "Projet tutoré",
          github: "nothing...",
          languages: ["VueJs", "Axios", "Vuex", "Leaflet"]
        },
        {
          name: "Portfolio",
          image: "images/profil.png",
          content: "Projet VueJs",
          github: "https://github.com/SkynixFr/Portfolio",
          languages: ["VueJs", "Vuex"]
        }
      ]
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