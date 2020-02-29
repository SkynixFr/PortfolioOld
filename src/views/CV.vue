<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        md="10"
        offset-md="1"
        sm="12"
        style="background-color:red"
      >
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <ListItems
              title="Contact details"
              :items="arrayContact"
              :list="boolList"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="5" offset-md="1" style="background-color:green">
        <ListItems title="Skills" :items="arraySkills" />
      </v-col>
      <v-col md="5" style="background-color:purple">
        <ListItems title="Mastered Tools" :items="arrayMTools" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListItems from "@/components/ListItems.vue";
export default {
  name: "CV",
  components: {
    ListItems
  },
  data() {
    return {
      titleSkills: "Skills",
      boolList: true,
      arrayContact: [
        {
          icon: "mdi-phone",
          name: "Telephone number",
          color: "#006064",
          content: "+33 6 49 65 65 19"
        },
        {
          icon: "mdi-at",
          name: "E-mail",
          color: "#006064",
          content: "romain.day.ludovic@gmail.com"
        },
        {
          icon: "mdi-map-marker",
          name: "Address",
          color: "#006064",
          content: "24, rue du Général Hulot, 54000 Nancy FRANCE"
        }
      ],
      arraySkills: [
        {
          icon: "mdi-vuejs",
          name: "VueJs",
          color: "#004D40"
        },
        {
          icon: "mdi-language-php",
          name: "PHP7",
          color: "#01579B"
        },
        {
          icon: "mdi-language-html5",
          name: "HTML5",
          color: "#E65100"
        },
        {
          icon: "mdi-language-css3",
          name: "CSS3",
          color: "#01579B"
        },
        {
          icon: "mdi-language-javascript",
          name: "Javascript",
          color: "#F9A825"
        },
        {
          icon: "mdi-nodejs",
          name: "NodeJs",
          color: "#689F38"
        },
        {
          icon: "mdi-nativescript",
          name: "Nativescript-vue",
          color: "#01579B"
        }
      ],
      arrayMTools: [
        {
          icon: "mdi-git",
          name: "Git",
          color: "#E65100"
        },
        {
          icon: "mdi-docker",
          name: "Docker",
          color: "#0277BD"
        },
        {
          icon: "fab fa-windows",
          name: "Windows10",
          color: "#0277BD"
        },
        {
          icon: "mdi-linux",
          name: "Linux",
          color: "#263238"
        },
        {
          icon: "mdi-database",
          name: "MySQL",
          color: "#0277BD"
        },
        {
          icon: "mdi-database",
          name: "MongoDB",
          color: "#2E7D32"
        }
      ]
    };
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
.listContactDetails {
  list-style: none;
  .size-icons {
    font-size: 40px !important;
    @media screen and (max-width: 600px) {
      font-size: 25px !important;
    }
  }
}
</style>