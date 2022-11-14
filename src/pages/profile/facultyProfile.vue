<template>
  <div>
    <navBar class="nav" />
    <div class="flex-container-desktop">
      <div class="main-wrapper">
        <!-- <div class="flex-content flex-container flex-direction-column"> -->
        <div class="flex-content">
          <!-- Facility Images -->

          <div class="facility-container">
            <div class="facility-container-control">
              <h1 class="title-mobile">Faculty Profile</h1>
              <span class="facility-name-web">Facility Name</span>
              <div class="box-container">
                <div class="grey-bg big-box"></div>
                <!-- <div class="box-group"> -->
                <span class="grey-bg small-box"></span>
                <span class="grey-bg small-box"></span>
                <span class="grey-bg small-box">
                  <img
                    class="plus-icon"
                    src="@/assets/icons/Union (1).svg"
                    alt="plus"
                  />
                </span>
                <!-- </div>  -->
              </div>
              <div class="facility-code">
                <p class="facility-name-mobile">Facility Name</p>
                <p class="facility-label">Reg No: <span>00000-00000</span></p>
                <p class="facility-label">Status: <span>Inactive</span></p>
              </div>
            </div>
          </div>

          <!-- Form Elements -->
          <div class="form-main">
            <h1 class="title">Faculty Profile</h1>
            <form action="" class="form-container">
              <div class="form-group">
                <label class="form-label" for="email"
                  >Email Address <span>*</span></label
                >
                <input
                  class="form-input"
                  type="email"
                  id="email"
                  placeholder="newtonhospital@gmail.com"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="facilityName"
                  >Facility Name <span>*</span></label
                >
                <input
                  class="form-input"
                  type="text"
                  id="facilityName"
                  placeholder="Facility Name"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="services">Services</label>
                <input
                  class="form-input"
                  type="text"
                  id="services"
                  placeholder="Services"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="Address">Address</label>
                <input
                  class="form-input"
                  type="text"
                  id="Address"
                  placeholder="Address"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="country"
                  >Country <span>*</span></label
                >
                <select
                  class="form-input"
                  name="country"
                  onchange="printState('state',this.selectedIndex);"
                  id="country"
                ></select>
              </div>
              <div class="form-group">
                <label class="form-label" for="state"
                  >State <span>*</span></label
                >
                <select class="form-input" name="state" id="state">
                  <option value="">Select Country first</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="phoneNumber"
                  >Phone Number <span>*</span></label
                >
                <input
                  class="form-input"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="description">Description</label>
                <textarea
                  class="form-input form-textarea"
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  resize="none"
                >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dignissimos.</textarea
                >
              </div>
              <button class="button primary-button save-changes">
                Save Changes
              </button>
            </form>
          </div>

          <!-- settings section -->

          <div class="image-container">
            <div class="settings-container">
              <div class="settings-heading">
                <span>Settings</span>
              </div>
              <div class="settings-options">
                <a href="#" class="profile">Profile Settings</a>
                <a href="#" class="deactivate">Deactivate Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Request } from "../../../function/request.js";
import navBar from "@/components/navBar.vue";

export default {
  name: "facultyProfile",
  components: {
    navBar,
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
}
form {
  background: none;
  box-shadow: none;
  border-radius: 10;
  padding: 0;
}
template {
  /* background-color: var(--color-background); */
  background-color: #f5f8ff;
  height: 100vh;
  width: 100vw;
}

.nav-small {
  position: inherit;
}
/* For Mobile Devices <= 520px */

/* Settings Section */
.settings-container {
  display: flex;
  max-width: 293px;
  height: 100%;
  left: 64px;
  top: 106px;
}

.settings-heading {
  display: none;
}

.settings-options {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.settings-options a {
  text-decoration: none;
  padding: 15px 20px;
}

.settings-options .profile {
  display: none;
}

.settings-options .deactivate {
  color: var(--color-danger);
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-top: 32px;
}

.main-wrapper .title {
  display: none;
}

.title-mobile {
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
}

.flex-content {
  background: var(--color-secondary);
  box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 110px 5% 10%;
  padding-bottom: 60px;
}

.form-main {
  margin-top: 16px;
  padding: 0 8%;
}

/* Image Container */
.roundbg {
  border-radius: 50%;
  width: 118px;
  height: 118px;
  background-color: var(--color-input);
  margin: 20px;
}

.plus {
  margin-left: 34px;
  margin-top: 34px;
}

.text {
  display: block;
  font-size: 16px;
  color: #153d90;
  margin-bottom: 17px;
  text-align: center;
  text-decoration: none;
}

/* .w-50 {
  width: 50% !important;
} */

/* Form group */

.form-group span {
  color: var(--color-danger);
}

.form-input {
  /*input properties*/
  border: 1px solid var(--color-input);
  color: var(--color-black);
}

/* Button */
button.save-changes {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0;
}

/* ///////// */
/* Facility Images */

.facility-container {
  background-color: none;
  width: 295px;
  max-width: 300px;
  /* height: 368px; */
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: row;
}

.box-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 80px 60px;
  gap: 2px;
  margin-top: 16px;
}

/* .box-group {
  display: flex;
} */

.grey-bg {
  background-color: var(--color-input);
  border-radius: 3px;
  margin: 1.5px;
}

.big-box {
  width: 240px;
  grid-column: 1 / span 3;
  grid-row: 1 / span 2;
}

.small-box {
  display: flex;
  flex-direction: column;
  /* width: 85.5px;
  height: 64px; */
}

.plus-icon {
  margin: auto;
  width: 20px;
  height: 20px;
}

.facility-code {
  padding-top: 20px;
  /* padding-left: 10px; */
}

.facility-name-web {
  display: none;
}

.facility-name-mobile {
  font-size: 16px;
  padding-bottom: 10px;
  color: #000000;
  font-weight: 600;
  line-height: 19px;
}

.facility-label {
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #454545;
}

.facility-label span {
  color: #8c8c8c;
}

/* For Desktop >= 800px */
@media screen and (min-width: 800px) {
  .nav-small {
    display: none;
  }

  .nav-bar {
    display: flex;
  }

  .title-mobile {
    display: none;
  }

  .flex-content {
    background: none;
    box-shadow: none;
    border-radius: 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 30px;
  }

  .main-wrapper .title {
    display: block;
    align-self: flex-start;
    margin: 0 0 16px;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
  }

  /* .main-wrapper {
        flex-direction: row;
        width: 80%;
    } */

  /* .main-wrapper .title {
        display: block;
        align-self: flex-start;
        padding: 25px 0 0 47px;
        margin: 0 0 30px;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
    } */

  /* .flex-direction-column {
        flex-direction: row;
        width: 100%;
    } */

  .settings-container {
    display: block;
    width: 20vw;
    max-width: 300px;
    padding: 22px 0 22px;
    background: var(--color-secondary);
    box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
    border-radius: 10px;
  }

  .settings-heading {
    display: block;
    width: 100%;
    padding: 10px 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: var(--color-body);
    margin-bottom: 16px;
  }

  .settings-options .profile {
    display: block;
    background: var(--color-profile-bg);
    color: var(--color-primary);
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }

  .settings-options .deactivate {
    margin-top: 0;
  }

  .facility-name-mobile {
    display: none;
  }
  .facility-name-web {
    display: block;
    font-size: 20px;
    color: #1f1f1f;
    font-weight: 600;
    line-height: 24px;
  }

  .facility-code {
    padding-left: 10px;
  }

  .facility-container {
    background-color: var(--color-secondary);
    width: 30vw;
  }

  .facility-container-control {
    margin: auto;
  }

  .big-box {
    width: 20vw;
    max-width: 270px;
  }

  .form-main {
    width: 40vw;
    background: var(--color-secondary);
    box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
    border-radius: 10px;
    padding: 5%;
    margin: 0 16px;
  }

  /* .flex-container-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
    } */

  .form-input {
    margin-bottom: 24px;
  }
}
</style>
