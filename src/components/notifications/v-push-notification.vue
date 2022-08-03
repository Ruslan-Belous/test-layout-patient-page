<template>
  <div class="push-notification">
    <transition-group
      name="v-transition-animate"
      tag="div"
      class="messages_list"
    >
      <div
        class="push-notification__content"
        v-for="msg in messages"
        :key="msg.id"
      >
        <div class="content__text">
          <span>{{ msg.name }}</span>
          <span>{{ msg.additionalPush }}</span>
          <fa icon="circle-check" />
        </div>
        <div class="content__btns">
          <button v-if="leftBtn.length">{{ leftBtn }}</button>
          <button v-if="rightBtn.length">{{ rightBtn }}</button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'v-push-notification',
  props: {
    messages: {
      type: Array,
      default() {
        return []
      },
    },
    rightBtn: {
      type: String,
      default: '',
    },
    leftBtn: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  watch: {
    messages() {
      this.hideNotifications()
    },
  },
  methods: {
    hideNotifications() {
      let vm = this
      if (this.messages.length) {
        setTimeout(() => {
          vm.messages.splice(vm.messages.length - 1, 1)
        }, vm.timeout)
      }
    },
  },
  mounted() {
    this.hideNotifications()
  },
}
</script>

<style lang="scss" scoped>
.push-notification {
  position: fixed;
  top: 75px;
  right: 12px;
  z-index: 10;
  .messages_list {
    display: flex;
    flex-direction: column-reverse;
  }
  &__content {
    height: 50px;
    background-color: #07567e;
    padding: 16px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    .content {
      &__text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          margin-right: 12px;
        }
      }
    }
  }
}
.v-transition-animate {
  &-enter,
  &-leave-to {
    transform: translateX(135px);
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: all 0.6s ease;
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }
  &-enter-to {
    opacity: 1;
  }
  &-leave {
    height: 50px;
    opacity: 1;
  }
  &-move {
    transition: transform 0.6s ease;
  }
}
</style>
