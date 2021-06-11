<template>
  <main>
    <div v-if="AUTHORIZED_USER_LOGIN" class="v-account">
        Welcome to your account, {{AUTHORIZED_USER_LOGIN}}!
      <br><br>
      <hr>
      <br><br>
      <input @click="logout" type="button" value="Logout">
    </div>
    <div v-else-if="loginForm">
      Login form<br><br>
      <form>
        <p>Login:</p>
        <input v-model="loginLogin" name="login" type="text">
        <br><br>
        <p>Password:</p>
        <input v-model="loginPassword" name="password" type="text">
        <br><br>
        <input @click="sendLoginForm" type="button" value="Send form">
        <p class="loginErrorMessage" style="color: red"></p>
      </form>
      <br><br>
      <a @click="loginForm = !loginForm; registrationForm = !registrationForm" style="cursor: pointer; border: 1px solid black; padding: 3px">Go to registration form</a>
    </div>
    <div v-else-if="registrationForm">
      Registration form<br><br>
      <form>
        <p>Login:</p>
        <input v-model="regLogin" name="login" type="text">
        <br><br>
        <p>Password:</p>
        <input v-model="regPassword" name="password" type="text">
        <br><br>
        <p>email:</p>
        <input v-model="regEmail" name="email" type="text">
        <br><br>
        <input @click="sendRegistrationForm" type="button" value="Send form">
        <p class="registrationErrorMessage" style="color: red"></p>
      </form>
      <br><br>
      <a @click="loginForm = !loginForm; registrationForm = !registrationForm" style="cursor: pointer; border: 1px solid black; padding: 3px">Go to login form</a>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "v-account",

  components: {
  },

  props: {
  },

  data() {
    return {
      loading: true,
      loginForm: true,
      registrationForm: false,
      loginLogin: '',
      loginPassword: '',
      regLogin: '',
      regPassword: '',
      regEmail: '',
    }
  },

  computed: {
    ...mapGetters([
      'AUTHORIZED_USER_LOGIN',
      'LOGIN_ERROR_MESSAGE',
      'REGISTRATION_ERROR_MESSAGE'
    ]),
  },

  watch: {
    $route: function () {
      this.getAuthorizedUserLogin();
    },
    LOGIN_ERROR_MESSAGE: function () {
      if (this.LOGIN_ERROR_MESSAGE) {
        document.querySelector('.loginErrorMessage').innerText = this.LOGIN_ERROR_MESSAGE;
      }
    },
    REGISTRATION_ERROR_MESSAGE: function () {
      if (this.REGISTRATION_ERROR_MESSAGE) {
        document.querySelector('.registrationErrorMessage').innerText = this.REGISTRATION_ERROR_MESSAGE;
      }
    }
  },

  mounted() {
    this.getAuthorizedUserLogin();
  },

  methods: {
    ...mapActions([
      'LOGOUT',
      'GET_AUTHORIZED_USER_LOGIN_FROM_API',
      'LOGIN',
      'REGISTER'
    ]),

    getAuthorizedUserLogin() {
      this.LOGOUT();
      return this.GET_AUTHORIZED_USER_LOGIN_FROM_API();
    },

    sendLoginForm() {
      this.LOGIN({
        login: this.loginLogin,
        password: this.loginPassword
      });
      this.loginLogin = '';
      this.loginPassword = '';
    },

    sendRegistrationForm() {
      this.REGISTER({
        login: this.regLogin,
        password: this.regPassword,
        email: this.regEmail
      });
      this.regLogin = '';
      this.regPassword = '';
      this.regEmail = '';
    },

    logout() {
      this.loginForm = true;
      this.registrationForm = false;
      this.LOGOUT();
    },
  },
}
</script>

<style lang="scss">
.v-account {
  margin: 40px 40px;
  color: #434343;
}
</style>