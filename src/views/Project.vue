<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="10" offset-md="1">
        <Projects title="Projects" :projects="arrayProjects" />
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
  },
  data() {
    return {
      arrayProjects: [
        {
          name: "Co-op",
          image: "images/co-op.png",
          content:
            "Co-op is a project developed in VueJs. It is a clone of Slack, a collaborative communications application.",
          github: "https://github.com/SkynixFr/Co-op",
          languages: ["VueJs", "Axios", "Vuex"],
          href: "https://coopvuejs.netlify.com"
        },
        {
          name: "Redsquare",
          image: "images/record.png",
          content:
            "Redsquare is the tutored project of my vocational Bachelor. It is an application that allows users to broadcast a live stream.",
          github: "",
          languages: ["VueJs", "Axios", "Vuex", "Leaflet", "MongoDB", "NodeJs"],
          href: ""
        },
        {
          name: "Portfolio",
          image: "images/profil.png",
          content:
            "Development of a digital portfolio in English presenting my academic and professional background.",
          github: "https://github.com/SkynixFr/Portfolio",
          languages: ["VueJs", "Vuex"],
          href: "https://romainday.netlify.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
