<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" md="10" offset-md="1" sm="10" offset-sm="1">
            <v-col md="10">
              <p class="headline-text">
                Contact details
                <v-divider width="25%"></v-divider>
              </p>
            </v-col>
            <v-col md="10" offset-md="1">
              <ul class="listContactDetails">
                <li>
                  <v-icon class="size-icons" color="#006064">mdi-phone</v-icon>
                  <span> : +33 6 49 65 65 19</span>
                </li>
                <li>
                  <v-icon class="size-icons" color="#006064">mdi-at</v-icon>
                  <span> : romain.day.ludovic@gmail.com</span>
                </li>
                <li>
                  <v-icon class="size-icons" color="#006064"
                    >mdi-map-marker</v-icon
                  >
                  <span> : 24 rue du Général Hulot, 54000 Nancy FRANCE</span>
                </li>
              </ul>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="5" offset-md="1" sm="10" offset-sm="1">
            <v-col md="10">
              <p class="headline-text">
                Skills
                <v-divider width="25%"></v-divider>
              </p>
            </v-col>
            <v-col cols="12" md="10" offset-md="1">
              <ul class="listSkills">
                <li class="skill" title="VueJs">
                  <v-icon class="size-icons" color="#004D40">mdi-vuejs</v-icon>
                </li>
                <li class="skill" title="PHP7">
                  <v-icon class="size-icons" color="#01579B"
                    >mdi-language-php</v-icon
                  >
                </li>
                <li class="skill" title="HTML5">
                  <v-icon class="size-icons" color="#E65100"
                    >mdi-language-html5</v-icon
                  >
                </li>
                <li class="skill" title="CSS3">
                  <v-icon class="size-icons" color="#01579B"
                    >mdi-language-css3</v-icon
                  >
                </li>
                <li class="skill" title="Javascript">
                  <v-icon class="size-icons" color="#F9A825"
                    >mdi-language-javascript</v-icon
                  >
                </li>
                <li class="skill" title="NodeJS">
                  <v-icon class="size-icons" color="#689F38">mdi-nodejs</v-icon>
                </li>
                <li class="skill" title="Nativescript-vue">
                  <v-icon class="size-icons" color="#01579B"
                    >mdi-nativescript</v-icon
                  >
                </li>
              </ul>
            </v-col>
          </v-col>
          <v-col cols="12" md="5" sm="10" offset-sm="1">
            <v-col md="10">
              <p class="headline-text">
                Mastered Tools
                <v-divider width="50%"></v-divider>
              </p>
            </v-col>
            <v-col md="10" offset-md="1">
              <ul class="listSkills">
                <li class="skill" title="Git">
                  <v-icon class="size-icons" color="#E65100">mdi-git</v-icon>
                </li>
                <li class="skill" title="Docker">
                  <v-icon class="size-icons" color="#0277BD">mdi-docker</v-icon>
                </li>
                <li class="skill" title="Windows10">
                  <v-icon class="size-icons" color="#0277BD"
                    >fab fa-windows</v-icon
                  >
                </li>
                <li class="skill" title="Linux">
                  <v-icon class="size-icons" color="#263238">mdi-linux</v-icon>
                </li>
                <li class="skill" title="MySQL">
                  <v-icon class="size-icons" color="#0277BD"
                    >mdi-database</v-icon
                  >
                </li>
                <li class="skill" title="MongoDB">
                  <v-icon class="size-icons" color="#2E7D32"
                    >mdi-database</v-icon
                  >
                </li>
              </ul>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CV"
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
    font-size: 40px;
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  }
}
.listSkills {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  .skill {
    margin: 0 5% 0 5%;
  }
}
</style>