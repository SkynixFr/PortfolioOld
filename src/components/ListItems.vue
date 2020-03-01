<template>
  <v-row>
    <v-col cols="12" md="12" sm="12">
      <p class="headline-text">
        {{ title }}
      </p>
    </v-col>
    <v-col cols="12" md="10" offset-md="1" sm="12">
      <ul :class="list ? 'listItemsContact' : 'listItems'">
        <Item v-for="item in items" :key="item.id" :item="item" />
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
  name: "ListItems",
  props: {
    title: {
      type: String,
      require: true
    },
    items: {
      type: Array,
      require: true
    },
    list: {
      type: Boolean,
      require: true
    }
  },
  components: {
    Item
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
.listItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
.listItemsContact {
  list-style: none;
}
</style>