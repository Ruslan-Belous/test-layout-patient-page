<template>
  <transition name="fade">
    <div v-if="isBtnUpShown" @click="scrollUp" class="button-up">
      <fa icon="fa-solid fa-angle-up" class="button-up__icon" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-scroll-up',
  data() {
    return {
      isBtnUpShown: false,
    }
  },
  mounted() {
    this.checkScrollPosition()
    window.addEventListener('scroll', this.checkScrollPosition)
  },
  methods: {
    checkScrollPosition() {
      this.isBtnUpShown = window.pageYOffset > 30
    },
    scrollUp() {
      scroll({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.button-up {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #07567e;
  right: 25px;
  bottom: 25px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 7px 8px -4px rgba($color: #000, $alpha: 0.2),
    0 12px 17px 2px rgba($color: #000, $alpha: 0.14),
    0 5px 22px 4px rgba($color: #000, $alpha: 0.12);
  transition: 0.4s;
  &:active {
    background-color: #102776;
  }
  &__icon {
    font-size: 22px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
