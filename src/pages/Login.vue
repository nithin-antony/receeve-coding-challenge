<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-header">
        <img class="logo-img" :src="logoImg" alt="logoImg" />
        <h1>receeve</h1>
      </div>
      <form @submit.prevent>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            :value="userName"
            @input="updateUserName($event)"
            :class="submitted && !userName ? 'is-invalid' : ''"
          />
          <div v-show="submitted && !userName" class="invalid-feedback">
            Username is required
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            :value="password"
            @input="updatePassword($event)"
            :class="submitted && !password ? 'is-invalid' : ''"
          />
          <div v-show="submitted && !password" class="invalid-feedback">
            Password is required
          </div>
        </div>
        <div class="form-group">
          <button @click="handleSubmit" :disabled="isLoggingIn">
            Login
          </button>
        </div>
      </form>
      <div v-show="loginError" class="invalid-feedback">
        Invalid username or password
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { login } from "../services/AuthService";

@Component({
  components: {},
})
export default class Login extends Vue {
  userName: string = "";
  password: string = "";
  submitted: boolean = false;
  loginError: boolean = false;
  isLoggingIn: boolean = false;
  logoImg: string = require("../assets/logo.png");

  updateUserName($event: { target: { value: string } }) {
    this.userName = $event.target.value;
  }

  updatePassword($event: { target: { value: string } }) {
    this.password = $event.target.value;
  }

  handleSubmit() {
    this.submitted = true;
    if (this.userName && this.password) {
      this.isLoggingIn = true;
      login(this.userName, this.password)
        .then((response: any) => {
          this.isLoggingIn = false;
          const { autnticated } = response;
          autnticated && this.$router.push({ name: "dashboard" });
          !autnticated && (this.loginError = true);
        })
        .catch(() => {
          this.loginError = true;
          this.isLoggingIn = false;
        });
    }
  }
  @Watch("userName")
  @Watch("password")
  onInvalidateForm() {
    this.loginError = false;
    this.submitted = false;
  }
}
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-color: #27292e;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-page .login-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-page .logo-img {
  width: 40px;
  height: 40px;
}

.login-page label {
  font-size: 20px;
  font-weight: 500;
}

.login-page input {
  width: 95%;
  height: 35px;
  border: 2px solid #7a7a7a;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;
}

.login-page button {
  background: #2e60ff;
  border-radius: 4.57px;
  height: 40px;
  width: 300px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  border: 0px;
}

.login-page button:hover {
  cursor: pointer;
}

.login-page button:disabled {
  background: grey;
}

.login-card {
  width: 300px;
  height: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px #f4f8ff;
}

.form-group {
  margin-bottom: 20px;
}

.form-group .is-invalid {
  border: 2px solid #cf2e2e !important;
}

.form-group .invalid-feedback {
  color: #cf2e2e;
  font-size: 15px;
  font-weight: 500;
}
</style>
