<template>
  <v-container fluid>
    <v-row align="center" justify="center" style="height: 750px;">
      <v-col cols="12" sm="12" md="10">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <p class="headline-text">Hi, I'm Romain</p>
          </v-col>
          <v-col cols="12" sm="12" md="10" offset-md="1">
            <blockquote class="blockquote-text">
              Currently in a vocational Bachelor’s degree specialized in Mobile
              and Web Development, I am looking for an internship from May to
              July 2020. Before my Bachelor, I attended a 2-year technical
              degree in Software Solutions and Trades Applications. I work very
              well in a team environment, I am a self- taught person who loves
              challenges. At the moment, I am working on a school project in
              order to create a new social network.
            </blockquote>
          </v-col>
        </v-row>
        <!-- <v-row>
        <v-col cols="10" md="6" offset-md="3">
          <p class="display-1 font-weight-light text-center">
            Profile
          </p>
        </v-col>
        <v-col cols="10" md="6" offset-sm="3">
          <blockquote class="blockquote">
            Currently in a vocational Bachelor’s degree specialized in Mobile
            and Web Development, I am looking for an internship from May to July
            2020. Before my Bachelor, I attended a 2-year technical degree in
            Software Solutions and Trades Applications. I work very well in team
            environment, I am self- taught person who loves challenges. At the
            moment, I am working on a school project in order to create a new
            social network.
          </blockquote>
        </v-col>
      </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.headline-text {
  font-size: 3em;
  font-weight: 300;
  font-style: italic;
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
}
.blockquote-text {
  font-size: 1.5em;
  font-weight: 300;
  text-align: justify;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
}
</style>