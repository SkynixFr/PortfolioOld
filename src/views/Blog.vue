<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1">
        <Videos title="Blog" />
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
  }
};
</script>

<style lang="scss" scoped>
</style>