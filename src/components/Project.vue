<template>
  <div class="projects-item">
    <v-card class="card-project" max-width="300px" shaped>
      <v-img
        height="250px"
        max-width="400px"
        min-width="300px"
        :src="project.image"
      ></v-img>
      <v-divider></v-divider>
      <v-card-subtitle class="headline-title">
        {{ project.name }}
      </v-card-subtitle>
      <v-card-text class="text--primary">
        <v-chip-group>
          <v-chip
            v-for="language in project.languages"
            :key="language.id"
            color="#00838F"
            :ripple="false"
            class="language"
            dark
          >
            {{ language }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn icon :title="project.github" :href="project.github">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="showDialog = true" text>
          <span>View more</span>
          <v-icon size="20">mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showDialog" max-width="600">
      <v-card>
        <v-card-title class="headline-text-modal">
          {{ project.name }}
        </v-card-title>
        <v-card-text class="content-modal">
          {{ project.content }}
          <v-chip-group>
            <v-chip
              v-for="language in project.languages"
              :key="language.id"
              color="#00838F"
              :ripple="false"
              class="language"
              dark
            >
              {{ language }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-card-actions>
          <v-btn text :href="project.href">
            <span>View site</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon :title="project.github" :href="project.github">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      showDialog: false,
      image: this.project.image
    };
  },
  props: {
    project: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.projects-item {
  display: flex;
  justify-content: center;
  margin: 1%;
  .card-project {
    min-width: 400px;
    @media screen and (max-width: 600px) {
      min-width: 350px;
    }
    .headline-title {
      font-size: 1.5em;
    }
    .language {
      cursor: inherit;
      &:before {
        background-color: transparent;
      }
    }
  }
}
.headline-text-modal {
  font-size: 1.5em !important;
  @media screen and (max-width: 600px) {
    font-size: 1.2em !important;
  }
}
.content-modal {
  font-size: 1em;
  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
}
.language {
  cursor: inherit;
  &:before {
    background-color: transparent;
  }
}
</style>