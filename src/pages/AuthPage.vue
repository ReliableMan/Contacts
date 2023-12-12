<template>
  <div class="p-2 main">
    <div class="mt-5">
    <b-form-group v-slot="{ ariaDescribedby }">

      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="admin">
          Admin
      </b-form-radio>

      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="user">
          User
      </b-form-radio>

    <b-button
      @click="setValue()"
      :disabled=isDisabled
      class="mt-4">
        Войти
    </b-button>
  </b-form-group>

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

export default {
  name: 'AuthPage',
  data() {
    return {
      selected: '',
    };
  },
  computed: {
    isDisabled() {
      return !this.selected;
    },
  },
  methods: {
    setValue() {
      this.$store.commit('setRole', this.selected);
      localStorage.setItem('role', this.selected);
      let timerInterval;
      Swal.fire({
        title: 'Ваша роль успешно сохранена!',
        html: 'Я закрою это окно через <b></b> миллисекунд.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector('b');
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      setTimeout(() => {
        this.$router.push('/contacts');
      }, 1600);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 91vh;
  background-color: rgb(232, 228, 228);
  display: flex;
  justify-content: center
}
</style>
