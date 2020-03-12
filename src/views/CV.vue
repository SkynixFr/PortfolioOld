<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-row justify="center"
          ><v-btn href="CV_en.pdf" target="_blank">
            Download CV
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="10" offset-md="1" sm="12">
        <ListItems title="Contact details" :items="arrayContact" :list="true" />
      </v-col>
      <v-col cols="12" md="5" offset-md="1">
        <ListItems title="Skills" :items="arraySkills" />
      </v-col>
      <v-col md="5">
        <ListItems title="Mastered Tools" :items="arrayMTools" />
      </v-col>
      <v-col cols="12" md="10" offset-md="1" sm="12">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <Timeline
              :items="arrayTimelineWexperience"
              title="Work experience"
            />
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <Timeline :items="arrayTimelineEducation" title="Education" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListItems from "@/components/ListItems.vue";
import Timeline from "@/components/Timeline.vue";
export default {
  name: "CV",
  components: {
    ListItems,
    Timeline
  },
  data() {
    return {
      arrayContact: [
        {
          icon: "mdi-phone",
          name: "Telephone number",
          color: "#00838F",
          content: "+33 6 49 65 65 19"
        },
        {
          icon: "mdi-at",
          name: "E-mail",
          color: "#00838F",
          content: "romain.day.ludovic@gmail.com"
        },
        {
          icon: "mdi-map-marker",
          name: "Address",
          color: "#00838F",
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
          icon: "fas fa-leaf",
          name: "MongoDB",
          color: "#2E7D32"
        }
      ],
      arrayTimelineWexperience: [
        {
          date: "2019",
          timeline: [
            {
              title: "Web development intern",
              place: "Résidence Saint-Martial - Limoges, FRANCE",
              date: "Jan 2019 - Feb 2019",
              content:
                "Develop a website and a web application promoting the inter-generational aspect of the residence."
            }
          ]
        },
        {
          date: "2018",
          timeline: [
            {
              title: "Department Employee",
              place: "Cora (large supermarket chain) - Limoges, FRANCE",
              date: "July 2018 - Aug 2018",
              content:
                "Manage the stock, install and label the items in the stationery department."
            },
            {
              title: "Web development intern",
              place: "CHU (hospital) - Limoges, FRANCE",
              date: "May 2018 - June 2018",
              content:
                "Develop a web application for the Metrology department of the Limoges University Hospital"
            }
          ]
        },
        {
          date: "2017",
          timeline: [
            {
              title: "Drive Employee",
              place:
                "Leclerc (large supermarket chain) - Brive-la-Gaillarde, FRANCE",
              date: "July 2017 - Aug 2017",
              content: "Prepare customer shopping and place orders."
            }
          ]
        }
      ],
      arrayTimelineEducation: [
        {
          date: "2020",
          timeline: [
            {
              title: "Vocational Bachelor",
              place: "Nancy University of Technology - Nancy, FRANCE",
              content: "Specialized in Mobile and Web Development."
            }
          ]
        },
        {
          date: "2019",
          timeline: [
            {
              title: "Technical Degree",
              place: "Lycée Suzanne Valadon - Limoges, FRANCE",
              content:
                "Specialized in Software Solutions and Trades Application."
            }
          ]
        },
        {
          date: "2018",
          timeline: [
            {
              title: "French Baccalaureate",
              place: "Lycée Georges Cabanis - Brive-la-Gaillarde, FRANCE",
              content: "Specialized in Computer Sciences."
            }
          ]
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