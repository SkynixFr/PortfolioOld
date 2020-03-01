<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — Copyright &copy;
        <span> Day Romain</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Home
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.state.theme;
  }
};
</script>
