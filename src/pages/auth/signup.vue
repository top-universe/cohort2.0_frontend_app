<template>
  <main>
    <!-- sign up successful component -->
    <modal v-show="signupSuccessful">
      <div class="modal-popup">
        <img
          class="created-check-image"
          src="@/assets/icons/CheckCircle.svg"
          alt="check"
        />
        <div class="created-header-text">Account Creation Successful</div>
        <button class="primary-button">Continue</button>
      </div>
    </modal>

    <!-- verify your email -->
    <modal v-show="verifyEmail">
      <div class="modal-popup">
        <img
          class="verify-mail-image"
          style="margin-top: 40px"
          src="@/assets/icons/Mail.svg"
          alt="check"
        />

        <div class="created-header-text">A mail has been sent to you.</div>
        <div class="verify-sub-text">
          Check the email account you submitted for your verification link.
        </div>
        <button class="primary-button" style="margin-bottom: 16px">
          Go to Email
        </button>
        <button class="primary-button white-btn">Resend link</button>
      </div>
    </modal>

    <!-- verify email successful -->
    <modal v-show="verifyEmailSuccessful">
      <div class="modal-popup">
        <img
          class="created-check-image"
          style="margin-top: 40px"
          src="@/assets/icons/CheckCircle.svg"
          alt="check"
        />

        <div class="created-header-text">Email Verified!</div>
        <div class="verify-sub-text">
          You have successfully verified your account
        </div>
        <button class="primary-button">Ok</button>
      </div>
    </modal>

    <div class="bg-img">
      <h3>MedBookly</h3>
    </div>
    <div class="form-wrapper">
      <div class="med-title">
        <h1>MedBookly</h1>
      </div>
      <form @submit.prevent="signup">
        <div class="heading">
          <h2>Sign Up</h2>
          <p>Let's get to know you</p>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            @input="validEmail"
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
        <div>
          <input type="submit" value="Create Account" />
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
            Already have an account?
            <router-link to="signin">Sign In</router-link>
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
      signupSuccessful: false,
      populatedState: [],
      forgotPassword: false,
      verifyEmail: false,
      verifyEmailSuccessful: false,
      classCloseIcon: "icon-show",
      classOpenIcon: "icon-hide",
      passwordInput: "password",
      emailRegex: "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",
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
    async signup() {
      const data = {
        email: this.user.email,
        password: this.user.password,
      };
      console.log(data);
      const request = Request.call("POST", "signup", data).then((data) => {
        alert(data.data.success);
      });
      // await Request.call("POST", 'signup', JSON.stringify(user)).then(res => {
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log()
      // }).finally( {})
    },

    // function to valid email
    validEmail() {
      return this.user.email.match(this.emailRegex)
        ? console.log("valid email")
        : console.log("invalid email, please check and try again");
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
  margin: 62px 0 26px;
}

.icon-show {
  display: block;
}

.icon-hide {
  display: none;
}

.modal-popup .created-header-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 24px;
}

.modal-popup .created-header-text a {
  color: var(--color-primary);
}
/* end modal-popup (modal)*/

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

.verify-sub-text {
  color: #8c8c8c;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
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
input[type="password"],
input[type="submit"] {
  height: 40px;
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
