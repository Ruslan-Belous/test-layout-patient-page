<template>
  <div class="raiting">
    <div
      class="raiting__item"
      v-for="rate in rateArray"
      :key="rate.id"
      @click="takeRate(rate.id)"
    >
      <fa
        :icon="rate.icon"
        class="raiting__star"
        :class="{ active: rate.isActive }"
      />
      <p>{{ rate.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-raiting',
  props: {
    // setRate: {
    //   type: Number,
    //   default: null || setRateValue,
    // },

    rateArray: {
      type: Array,
      default: () => [
        {
          id: 1,
          isActive: false,
          icon: 'fa-star',
          rate: 1,
          desc: 'Дуже погано',
        },
        {
          id: 2,
          isActive: false,
          icon: 'fa-star',
          rate: 2,
          desc: 'Погано',
        },
        {
          id: 3,
          isActive: false,
          icon: 'fa-star',
          rate: 3,
          desc: 'Нормально',
        },
        {
          id: 4,
          isActive: false,
          icon: 'fa-star',
          rate: 4,
          desc: 'Добре',
        },
        {
          id: 5,
          isActive: false,
          icon: 'fa-star',
          rate: 5,
          desc: 'Дуже добре',
        },
      ],
    },
  },
  data: () => ({
    setRateValue: null,
  }),
  methods: {
    takeRate(id) {
      let choosenArr = this.rateArray.filter((el) => el.id === id)
      let choosenItem = choosenArr[0]
      choosenItem.isActive = !choosenItem.isActive
      this.rateArray.map(
        (el) => el.id !== choosenItem.id && (el.isActive = false)
      )
      this.setRateValue = choosenItem.id
      console.log(choosenItem.id)
      //   console.log(choosenItem.id)
      //   return choosenItem.id
      //   searchId[0].isActive = !searchId[0].isActive
      //   this.this.$emit('take-rate')
    },
  },
}
</script>

<style lang="scss" scoped>
.raiting {
  display: flex;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 8px;
    p {
      font-size: 10px;
    }
  }
  &__star {
    font-size: 60px;
    color: coral;
    transition: 0.2s;
  }
  &__star:hover {
    color: red;
  }
}
.active {
  color: red;
}
</style>
