<template>
  <div class="icons-container">
    <icon-icon
    v-for="(icon, i) in icons"
    :key="i"
    :icon="icon"
    @click="zoom(icon, i)"
    :class="{ selected: icon === icons[index] }"
    :style="{ fontSize: `${size}px` }"
    ></icon-icon>
  </div>
</template>

<script>
import IconIcon from './IconIcon'

export default {
  props: ['icons', 'size', 'index'],
  data () {
    return {
      zoomed: null,
      selected: null
    }
  },
  methods: {
    zoom: function (icon, index) {
      this.$emit('zoom', { icon, index })
      this.selected = icon
    },
  },
  components: { IconIcon },
}
</script>

<style lang="scss">
@import "./variables";
@import "./colors";

.icons-container {
  overflow: hidden;
  padding: 0 1px 1px 0;
  user-select: none;
  .selected i {
    background-color: $gray-1;
    color: #fff;
  }
  .icon {
    display: block;
    float: left;
    margin: 0 -1px -1px 0;
    box-shadow: inset 0 0 0 1px lighten($gray-1, 60%);
    @media screen and (max-width: 480px) {
      $cell: 32px;
      line-height: $cell !important;
      font-size: $cell*.75 !important;
      width: $cell !important;
      height: $cell !important;
      padding: 10px !important;
    }
    padding: 20px;
    cursor: pointer;
    &:hover {
      background: $blue-1;
      color: #fff;
    }
  }
}
</style>
