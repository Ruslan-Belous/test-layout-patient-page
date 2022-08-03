<template>
  <div class="doc-photo">
    <img :src="docPhoto" :alt="alt" />
  </div>
</template>

<script>
import defaultdocPhoto from '../assets/images/docPhoto.jpeg'
export default {
  name: 'the-doc-photo',
  props: {
    docPhoto: {
      type: String,
      default: defaultdocPhoto,
    },
    alt: {
      type: String,
      default: 'Image',
    },
  },
}
</script>

<style lang="scss" scoped>
.doc-photo {
  width: 219px;
  height: 243px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
