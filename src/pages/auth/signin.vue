<template>
  <main>
    <!-- forgot password component -->
    <modal v-show="forgotPassword">
      <div class="modal-popup">
        <img
          class="created-check-image"
          src="@/assets/icons/forgotPassword.svg"
          alt="check"
        />
        <div class="created-header-text">Forgot Password</div>
        <button class="primary-button">Send Confirmation Email</button>
      </div>
    </modal>

    <div class="bg-img">
      <h3>MedBookly</h3>
    </div>
    <div class="form-wrapper">
      <div class="med-title">
        <h1>MedBookly</h1>
      </div>
      <form @submit.prevent="signin">
        <div class="heading">
          <h2>Sign In</h2>
          <p>Let's get to know you</p>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            v-model="user.email"
          />
        </div>

        <div class="password">
          <label for="password">Password</label>
          <input
            :type="passwordInput"
            id="password"
            placeholder="Password"
            required
            v-model="user.password"
          />
          <div class="icons">
            <div :class="classCloseIcon" @click="showPassword">
              <img src="@/assets/icons/eye-slash.svg" alt="Icon" />
            </div>

            <div :class="classOpenIcon" @click="hidePassword">
              <img
                src="@/assets/icons/eye.svg"
                alt="Icon"
                @click="hidePassword"
              />
            </div>
          </div>
        </div>

        <div class="remember-check">
          <label for="email">Remember me?</label>
          <input type="checkbox" id="email" v-model="user.remember" />
        </div>

        <div>
          <input type="submit" value="Log in" />
        </div>

        <div class="forget-password">
          <a @click="toggleForgetPassword">Forget Password?</a>
        </div>

        <div class="signup-with">
          <p>or sign up with</p>
        </div>

        <div class="option-signup">
          <a href="#"><img src="@/assets/icons/icon_google.svg" alt="" /></a>
          <a href="#"><img src="@/assets/icons/icon_facebook.svg" alt="" /></a>
        </div>
        <div class="footer">
          <p>
            Do not have an account ?
            <router-link to="signup">Sign Up</router-link>
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { Request } from "../../../function/request.js";
import modal from "@/components/modal.vue";

export default {
  data() {
    return {
      forgotPassword: false,
      classCloseIcon: "icon-show",
      classOpenIcon: "icon-hide",
      passwordInput: "password",
      user: {
        email: null,
        password: null,
      },
    };
  },
  components: {
    modal,
  },
  methods: {
    signin() {
      let user = this.user.email;
      alert(`signup clicked ${user}`);
    },

    toggleForgetPassword() {
      this.forgotPassword = !this.forgotPassword;
    },

    showPassword() {
      if ((this.passwordInput = "password")) {
        this.passwordInput = "text";
        this.classCloseIcon = "icon-hide";
        this.classOpenIcon = "icon-show";
      }
    },

    hidePassword() {
      if ((this.passwordInput = "text")) {
        this.passwordInput = "password";
        this.classCloseIcon = "icon-show";
        this.classOpenIcon = "icon-hide";
      }
    },
  },
};
</script>

<style scoped>
/* modal popup class */
.modal-popup {
  width: 300px;
}

.modal-popup .created-check-image {
  width: 72px;
  height: 72px;
  margin: 62px 0 24px;
}

.modal-popup .created-header-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
}

.modal-popup .created-header-text a,
.forget-password {
  color: var(--color-primary);
}
/* end modal-popup (modal)*/

.forget-password {
  text-align: right;
  font-size: var(--fontsize);
  cursor: pointer;
}

.bg-img {
  display: none;
}

/* Form Container */

.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-form-bg);
  /* padding: 0px; */
  /* height: 832px; */
  height: 100vh;
  /* flex-basis: 50%; */
  flex-direction: column;
}

.med-title h1 {
  font-weight: 700;
  font-size: 20px;
  /* line-height: 24px; */
  margin-bottom: 30px;
  color: var(--color-primary);
}

.heading {
  text-align: center;
  padding: 25px 0;
}

.heading h2 {
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
}

.heading p {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

div > label {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.signup-with {
  text-align: center;
  font-size: var(--fontsize);
  position: relative;
  margin: 60px 0 40px;
}

.signup-with::before,
.signup-with::after {
  content: "";
  display: block;
  position: absolute;
  height: 0.9px;
  width: 30%;
  background-color: black;
  top: 60%;
}

.signup-with::after {
  right: 0;
}

/* Password Icon */

.password {
  position: relative;
}

.icons {
  position: absolute;
  top: 50%;
  right: 10px;
}

/* Social media optional sign-up */

.option-signup {
  text-align: center;
  margin: 30px 0;
}

.option-signup img {
  margin-right: 15px;
}

/* Footer */

.footer {
  text-align: center;
  font-size: var(--fontsize);
}

.footer a {
  text-decoration: none;
  color: var(--color-primary);
}

/* Mobile view */

.form-wrapper {
  padding: 0 50px;
}
form {
  width: 350px;
}

input[type="email"],
input[type="text"],
input[type="password"],
input[type="submit"] {
  height: 40px;
}

input[type="checkbox"] {
  height: 16px;
  width: 16px;
}

.remember-check {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-show {
  display: block;
}

.icon-hide {
  display: none;
}

/* Tablet view */

@media (max-width: 900px) and (min-width: 521px) {
  .med-title h1 {
    display: block;
  }
  .form-wrapper {
    /* width: 100%; */
    /* width: 900px; */
    /* padding: 0 200px; */
    flex-direction: column;
  }
  .bg-img {
    display: none;
  }
  form {
    width: 500px;
  }
  .heading h2 {
    font-size: 24px;
    line-height: 29px;
  }
  .heading p {
    font-weight: 400;
    font-size: var(--fontsize);
    line-height: 20px;
  }
  .signup-with::before,
  .signup-with::after {
    width: 35%;
  }
}

/* Desktop view */

@media (min-width: 1024px) {
  /* Main container */

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    /* max-width: 100%;
    height: 832px; */
    height: 100vh;
  }

  /* Image Container */

  .bg-img {
    display: block;
    height: 100vh;
    background-image: url("../../assets/image/sign_up_image 1@1x.png");
    background-repeat: no-repeat;
    background-size: cover;
    flex-basis: 50%;
    position: relative;
  }

  .bg-img h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: var(--color-secondary);
    position: absolute;
    left: 57px;
    top: 37px;
  }

  /* Form Container */

  .form-wrapper {
    padding: 40px;
    /* height: 832px; */
    height: 100vh;
    flex-basis: 50%;
  }

  form {
    width: 500px;
  }

  .med-title h1 {
    display: none;
  }
}
</style>
