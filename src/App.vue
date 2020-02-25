<template>
  <v-app>
    <Navbar />
    <v-content>
      Hello
    </v-content>
    <v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong> Portfolio | Day Romain</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar
  }
};
</script>
