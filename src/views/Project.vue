<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1">
        <Projects title="Projects" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from "@/components/Projects.vue";
export default {
  name: "Project",
  components: {
    Projects
  }
};
</script>

<style lang="scss" scoped>
</style>