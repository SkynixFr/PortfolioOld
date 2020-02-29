<template>
  <li :title="item.name" v-if="item.content">
    <v-icon class="size-icons" :color="item.color">{{ item.icon }}</v-icon
    ><span> : {{ item.content }}</span>
  </li>
  <li :title="item.name" v-else>
    <v-icon class="size-icons" :color="item.color">{{ item.icon }}</v-icon>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"]
};
</script>

<style lang="scss" scoped>
.size-icons {
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
}
</style>