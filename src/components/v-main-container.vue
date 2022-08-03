<template>
  <main class="main-container container">
    <v-doctor-card :full-name="'Тестова Оксана Василівна'" />
    <v-scroll-up />
  </main>
</template>

<script>
import VDoctorCard from './v-doctor-card.vue'
import VScrollUp from './v-scroll-up.vue'

export default {
  components: { VScrollUp, VDoctorCard },
  name: 'v-main-container',
}
</script>

<style lang="scss" scoped>
.main-container {
  flex: 1 1 auto;
}
</style>
