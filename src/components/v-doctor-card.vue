<template>
  <div class="doctor-card">
    <div class="doctor-info-top">
      <h2 class="doctor-info-top__full-name">{{ fullName }}</h2>
      <div class="doctor-info-top__average-raiting">
        <v-rate-item class="star" v-for="star in quantityStars" :key="star" />
        <p>Середня оцінка: {{ quantityStars }}</p>
      </div>
    </div>
    <div class="doctor-info-middle">
      <div class="doctor-info-middle__photo-geo-wrapp">
        <the-docrot-photo />
        <div class="doctor-info-middle__geo-info">
          <p><strong>Місто:</strong> {{ city }}</p>
          <p><strong>Місце роботи:</strong> {{ workPlace }}</p>
          <p><strong>Заклад:</strong> {{ institution }}</p>
        </div>
      </div>
      <v-feedback-form />
    </div>
  </div>
</template>

<script>
import TheDocrotPhoto from './the-docrot-photo.vue'
import VFeedbackForm from './v-feedback-form.vue'
import VRateItem from './v-rate-item.vue'

export default {
  name: 'v-doctor-card',
  components: { TheDocrotPhoto, VFeedbackForm, VRateItem },
  props: {
    quantityStars: {
      type: Number,
      default: 3,
    },
    fullName: {
      type: String,
      default: ' ',
    },
    city: {
      type: String,
      default: 'Львів',
    },
    workPlace: {
      type: String,
      default: 'Львів, площа Ринок, 10',
    },
    institution: {
      type: String,
      default: 'Відділення медичної екстренноі допомоги',
    },
  },
}
</script>

<style lang="scss" scoped>
.doctor-card {
  margin: 20px 0;
  .doctor-info-top {
    display: flex;
    align-items: center;
    &__full-name {
      color: #14c1c5;
    }
    &__average-raiting {
      margin-left: 30px;
      display: flex;
      align-items: center;
      p {
        margin-left: 30px;
      }
      .star {
        font-size: 30px;
        color: coral;
      }
    }
  }
  .doctor-info-middle {
    position: relative;
    display: flex;
    margin: 20px 0;
    padding: 8px;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.1);
    &__photo-geo-wrapp {
      position: relative;
      display: flex;
    }
    &__geo-info {
      margin-left: 20px;
    }
  }
}
</style>
