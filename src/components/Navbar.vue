<template>
  <div>
    <v-app-bar app fixed>
      <v-btn text class="title" :ripple="false" to="/">
        <span class="headline-text" title="Home">
          Portfolio | Day Romain
        </span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text class="ma-2 hidden-sm-and-down" to="/cv">
        <span class="title font-weight-light">Curriculum vitae</span>
      </v-btn>
      <v-btn text class="ma-2 hidden-sm-and-down" to="/blog">
        <span class="title font-weight-light">Blog</span>
      </v-btn>
      <v-btn text class="ma-2 hidden-sm-and-down" to="/project">
        <span class="title font-weight-light">Project</span>
      </v-btn>
      <v-btn icon class="ma-2 hidden-sm-and-down" @click="changeTheme">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Portfolio</v-list-item-title>
          <v-list-item-subtitle> Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/cv">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Curriculum vitae</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/blog">
          <v-list-item-icon>
            <v-icon>mdi-library-video</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/project">
          <v-list-item-icon>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Project</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon @click="changeTheme"
            ><v-icon>mdi-invert-colors</v-icon></v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      theme: false,
      drawer: null
    };
  },
  methods: {
    changeTheme() {
      this.$store.commit("updateTheme", !this.$store.state.theme);
      this.$vuetify.theme.dark = this.$store.state.theme;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  &:before {
    background-color: transparent;
  }
  .headline-text {
    font-weight: 300;
    font-size: 1.5em;
    @media screen and (max-width: 600px) {
      font-size: 1em;
    }
  }
}
.v-btn {
  text-transform: none;
}
</style>