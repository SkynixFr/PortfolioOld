<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">
        {{ title }}
      </p>
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
</style>