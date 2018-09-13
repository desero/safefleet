<template>
  <div @click="handleClick">
    <icon>{{ icon.liga }}</icon>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  props: ['icon', 'size'],
  methods: {
  	handleClick() {
    	this.$emit('click')
    }
  },
  components: { Icon }
}
</script>
