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
            "Co-op est un projet développé en VueJs. C'est un clone de Slack, une application de communications collaborative.",
          github: "https://github.com/SkynixFr/Co-op",
          languages: ["VueJs", "Axios", "Vuex"],
          href: "https://coopvuejs.netlify.com"
        },
        {
          name: "Redsquare",
          image: "images/record.png",
          content:
            "Redsquare est le projet tutoré de ma licence CIASIE. C'est une application qui permet aux utilisateurs de diffuser un flux en direct.",
          github: "",
          languages: ["VueJs", "Axios", "Vuex", "Leaflet", "MongoDB", "NodeJs"],
          href: ""
        },
        {
          name: "Portfolio",
          image: "images/profil.png",
          content:
            "Elaboration  d'un portfolio numérique en Anglais présentant mon parcours scolaire et professionnel.",
          github: "https://github.com/SkynixFr/Portfolio",
          languages: ["VueJs", "Vuex"],
          href: "https://romainday.netlify.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>