<template>
  <div class="rate-item" @click="takeRate">
    <fa
      :icon="icon"
      class="rate-item__star"
      :class="{ active: isActive, hover: hover }"
    />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-rate-item',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    rate: {
      type: Object,
    },
    icon: {
      type: String,
      default: 'fa-star',
    },
    description: {
      type: String,
      default: '',
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    takeRate() {
      this.$emit('take-rate')
    },
  },
}
</script>

<style lang="scss" scoped>
.rate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
  p {
    font-size: 10px;
  }
  &__star {
    font-size: 45px;
    color: coral;
    transition: 0.3s;
  }
}
.hover:hover {
  color: red;
}
.active {
  color: red;
}
</style>
