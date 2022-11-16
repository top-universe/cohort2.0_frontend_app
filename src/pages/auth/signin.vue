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
        <button
          @click="
            () => {
              resetInput = true;
              forgotPassword = false;
            }
          "
          class="primary-button"
        >
          Send Confirmation Email
        </button>
      </div>
    </modal>

    <!-- enter your email for forgot password -->
    <modal v-show="resetInput">
      <div class="modal-popup">
        <div style="margin-top: 50px" class="created-header-text">
          Forgot Password?
        </div>

        <div class="forget-input-container">
          <a href="#"
            ><img src="../assets/Closecancel.svg" id="mobileCancel" alt=""
          /></a>
          <p class="mobileFgt">Forgot your password?</p>

          <div class="padlock">
            <!-- padlock icon -->
            <img class="lockers" src="@/assets/icons/Vectorlock.svg" alt="" />
            <p>
              Enter your email address to receive a mail to reset your password
            </p>
          </div>

          <div style="all: none" class="the-forget-input">
            <label for="Enter address" class="label">Enter Email address</label>
            <input
              class="enter-email email"
              type="email"
              placeholder="e.g email@domain.com"
            />
            <button
              @click="
                () => {
                  resetInput = false;
                  resetLink = true;
                }
              "
              style="margin: 0"
              class="primary-button"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </modal>

    <!-- modal for reset  password link sent -->
    <modal v-show="resetLink">
      <div class="modal-popup">
        <div style="margin-top: 50px" class="created-header-text">
          Reset Account Passowrd
        </div>

        <div class="forget-input-container">
          <h3 style="margin-bottom: 20px">Check email for reset link</h3>

          <div class="padlock">
            <p class="text-center line-height">
              A mail has been sent to the administravtive email address you
              submitted. Check your email inbox and click the reset link
              provided.
            </p>
          </div>

          <div class="the-forget-input">
            <span style="color: red; font-size: 14px; margin-top: 40px">
              <i>Reset link will become invalid in 60 seconds</i>
            </span>

            <button
              @click="
                () => {
                  resetPassword = true;
                  resetLink = false;
                }
              "
              class="primary-button white-btn"
              style="margin-top: 20px"
            >
              Didn't receive an email?
            </button>
          </div>
        </div>
      </div>
    </modal>

    <!-- modal for changing/inputing new password-->
    <modal v-show="resetPassword">
      <div class="modal-popup">
        <div style="margin-top: 50px" class="created-header-text">
          Reset Account Password
        </div>

        <div class="forget-input-container">
          <div class="padlock">
            <p class="text-center line-height">
              Strong password include members, letters, and punctuation marks.
            </p>
          </div>

          <div style="all: none" class="the-forget-input">
            <label for="Enter address" class="label"><b>New Password</b></label>
            <input class="enter-email email" type="text" />

            <label for="Enter address" class="label">
              <b>Confirm Password</b>
            </label>
            <input class="enter-email email" type="text" />

            <button
              @click="
                () => {
                  resetPassword = false;
                  resetSuccessful = true;
                }
              "
              style="margin: 0"
              class="primary-button"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </modal>

    <!-- modal for reset password succesful -->
    <modal v-show="resetSuccessful">
      <div class="modal-popup">
        <img
          class="created-check-image"
          src="@/assets/icons/CheckCircle.svg"
          alt="check"
        />
        <div class="created-header-text">Password Changed</div>
        <div class="forget-input-container">
          <div class="padlock">
            <p class="text-center line-height">
              You password has been changed succesfully. <br />
              Use you new password to log in.
            </p>
          </div>

          <router-link to="signin">
            <button style="margin: 20px 0 0 0" class="primary-button">
              Login
            </button>
          </router-link>
        </div>
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
      resetInput: false,
      resetLink: false,
      resetPassword: false,
      resetSuccessful: false,
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
