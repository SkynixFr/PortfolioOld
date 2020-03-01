<template>
  <li v-if="item.content">
    <v-icon :title="item.name" class="size-icons" :color="item.color">{{
      item.icon
    }}</v-icon
    ><span class="content-text"> : {{ item.content }}</span>
  </li>
  <li :title="item.name" v-else>
    <v-icon class="size-icons" :color="item.color">{{ item.icon }}</v-icon>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.size-icons {
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
}
.content-text {
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
}
</style>