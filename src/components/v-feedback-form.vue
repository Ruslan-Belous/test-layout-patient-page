<template>
  <div class="feedback-form-wrapp">
    <h2>Залишити оцінку та відгук</h2>
    <form class="feedback" @submit.prevent="sendFeedback">
      <div class="feedback__introduce">
        <p><strong>Представтесь:</strong></p>
        <div class="feedback__input-wrapp">
          <input
            class="feedback__input"
            type="text"
            maxlength="50"
            placeholder="Вкажіть ваше прізвище та ім'я"
            :disabled="isAnonymously"
            :class="{ required: isRequiredField }"
            v-model="fullName"
          />
          <span
            class="fullname-counter"
            :class="{ error: isMoreMaxCountFullName }"
            >{{ fullName.length }}/50
          </span>
          <span class="error" v-if="isMoreMaxCountFullName"
            >Максимальна кількість символів 50</span
          >
        </div>
        <div class="feedback__checkbox">
          <input type="checkbox" id="checkbox" v-model="isChecked" />
          <label for="checkbox"><strong>Анонімно</strong></label>
        </div>
      </div>
      <div class="feedback__give-raiting">
        <p><strong>Оцініть роботу лікаря:</strong></p>
        <v-rate-item
          v-for="rate in rateArray"
          :key="rate.id"
          @take-rate="takeRate(rate.id)"
          :icon="rate.icon"
          :is-active="rate.isActive"
          :description="rate.desc"
          :rate="rate"
          :hover="true"
        />
      </div>
      <p class="error" v-if="isRequiredRate">
        × Необхідно оцінити роботу лікаря
      </p>
      <div class="feedback__add-feedback">
        <p><strong>Напишіть відгук:</strong></p>
        <div class="feedback__feedback-textarea-wrapp">
          <textarea
            class="feedback__feedback-textarea"
            type="text"
            maxlength="500"
            placeholder="Вкажіть відгук до 500 символів"
            v-model="feedbackText"
          />
          <span
            class="textarea-counter"
            :class="{ error: isMoreMaxCountFeedbackText }"
            >{{ feedbackText.length }}/500
          </span>
          <span class="error" v-if="isMoreMaxCountFeedbackText"
            >Максимальна кількість символів 500</span
          >
        </div>
      </div>
      <div class="feedback__btns">
        <v-button
          class="btn-clear"
          :secondary="true"
          type="button"
          @click="clearForm"
          :disabled="!canSend"
          :btnTitle="'Очистити'"
        />
        <v-button
          class="btn-send"
          type="submit"
          :primary="true"
          :disabled="!canSend"
          :btnTitle="'Надіслати'"
        />
      </div>
    </form>
    <v-push-notification :messages="messages" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VPushNotification from './notifications/v-push-notification.vue'
import vButton from './v-button.vue'
import VRaiting from './v-raiting.vue'
import VRateItem from './v-rate-item.vue'
export default {
  components: { vButton, VRaiting, VRateItem, VPushNotification },
  name: 'v-feedback-form',
  data: () => ({
    fullName: '',
    feedbackText: '',
    isChecked: false,
    rate: null,
    isRequiredField: false,
    isRequiredRate: false,
    rateArray: [
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
    messages: [],
  }),
  computed: {
    isAnonymously() {
      if (this.isChecked) {
        this.fullName = ''
        return true
      }
    },
    canSend() {
      return this.fullName || this.feedbackText
    },
    isMoreMaxCountFullName() {
      if (this.fullName.length >= 50) return true
    },
    isMoreMaxCountFeedbackText() {
      if (this.feedbackText.length >= 500) return true
    },
  },
  methods: {
    ...mapActions(['addFeedback']),
    takeRate(id) {
      this.rateArray.forEach((el) => {
        el.isActive = false
        if (el.id === id) {
          el.isActive = true
          this.rate = el.rate
        }
      })
    },
    sendFeedback() {
      const feedback = {
        id: Date.now(),
        rate: this.rate,
        fullName: this.fullName,
        feedbackText: this.feedbackText,
        isAnonymously: this.isChecked,
      }
      if (this.rate === null) {
        return (this.isRequiredRate = true)
      }
      if (this.isChecked) {
        this.addFeedback(feedback)
        this.isRequiredField = false
        this.clearForm()
        this.messages.push({
          id: Date.now(),
          name: 'Ваш відгук відправлено!',
        })
        return
      } else if (this.fullName === '') {
        return (this.isRequiredField = true)
      } else this.addFeedback(feedback)
      this.clearForm()
      this.messages.push({
        id: Date.now(),
        name: 'Ваш відгук відправлено!',
      })
    },
    clearForm() {
      this.fullName = this.feedbackText = ''
      this.rateArray.forEach((el) => (el.isActive = false))
      this.isChecked = false
    },
  },
}
</script>

<style lang="scss" scoped>
.feedback-form-wrapp {
  position: absolute;
  width: 100%;
  max-width: 600px;
  color: #07567e;
  background-color: #fff;
  z-index: 10;
  top: 109px;
  left: 248px;
  padding: 16px;
  margin: 15px 0;
  box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.1);
  h2 {
    text-align: center;
  }
  .feedback {
    .error {
      text-align: center;
    }
    &__introduce {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: #07567e;
      }
    }
    &__input-wrapp {
      width: 55%;
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    &__input {
      width: 100%;
      padding: 8px 16px;
      &::placeholder {
        color: #aaa;
        font-style: italic;
        text-align: center;
      }
    }
    &__checkbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
      }
    }
    &__give-raiting {
      display: flex;
      align-items: center;
      margin: 10px 0;
      p {
        margin-right: 20px;
      }
    }
    &__add-feedback {
      display: flex;
      align-items: center;
      margin: 10px 0 30px 0;
      p {
        color: #07567e;
        margin-right: 20px;
      }
    }
    &__feedback-textarea-wrapp {
      position: relative;
      display: flex;
      width: 65%;
      flex-direction: column;
      align-items: center;
    }
    &__feedback-textarea {
      width: 100%;
      padding: 8px 16px;
      &::placeholder {
        color: #aaa;
        font-style: italic;
      }
    }
    &__btns {
      display: flex;
      justify-content: space-around;
    }
  }
}
.fullname-counter,
.textarea-counter {
  position: absolute;
  right: 10px;
  font-size: 10px;
  top: 44px;
}
.textarea-counter {
  top: 67px;
}
.btn-clear,
.btn-send {
  max-width: 130px;
  width: 100%;
  border-radius: 0;
  border: 1px solid #000;
}
.error {
  color: red;
  font-size: 10px;
}
.required {
  border: 1px solid #d60000;
}
input:disabled {
  border-color: rgba(118, 118, 118, 0.3);
}

@media (min-width: 1201px) {
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 970px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .container {
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: none;
  }
}
</style>
