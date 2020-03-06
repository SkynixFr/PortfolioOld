<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12">
      <p class="headline-text">
        {{ title }}
      </p>
    </v-col>
    <v-col>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Z3OjKkvicHo"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Videos",
  props: {
    title: {
      type: String,
      require: true
    }
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
