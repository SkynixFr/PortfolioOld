<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">
        {{ title }}
      </p>
      <span class="subtitle-text">Here you can see my projects</span>
    </v-col>
    <Project
      v-for="project in projects"
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
    },
    projects: {
      type: Array,
      require: true
    }
  },
  components: {
    Project
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
.subtitle-text {
  font-size: 1em;
  font-weight: 300;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
}
</style>