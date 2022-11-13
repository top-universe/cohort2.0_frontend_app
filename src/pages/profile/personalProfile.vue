<template>
  <div>
    <headers></headers>

    <!-- main body content -->
    <div class="flex-container-desktop">
      <div class="main-wrapper">
        <h1 class="title">Profile</h1>
        <div class="flex-container flex-direction-column">
          <div class="image-container">
            <div class="flex-container">
              <p class="roundbg">
                <img class="plus" src="../changeprofile/Union.svg" alt="plus" />
              </p>
            </div>
            <a href="" class="text">Change Profile Picture</a>
            <div class="flex-container">
              <button class="btn btn-primary w-50">Edit Profile</button>
            </div>
          </div>
          <form action="" class="form-container">
            <div class="form-group">
              <label class="form-label" for="firstName"
                >First Name <span>*</span></label
              >
              <input
                class="form-input"
                type="text"
                id="firstName"
                placeholder=""
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="middleName">Middle Name</label>
              <input
                class="form-input"
                type="text"
                id="middleName"
                placeholder=""
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="lastName"
                >Last Name <span>*</span></label
              >
              <input
                class="form-input"
                type="text"
                id="lastName"
                placeholder=""
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="email"
                >Email Address <span>*</span></label
              >
              <input
                class="form-input"
                type="email"
                id="email"
                placeholder="admin@medbookly.com"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="dob">Date of Birth</label>
              <input
                class="form-input"
                type="date"
                id="dob"
                placeholder="dd-mm-yy"
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
                @change="onChange($event)"
                v-model="user.country"
              >
                <option
                  v-for="(list, index) in country"
                  :key="index"
                  :value="list.name"
                >
                  {{ list.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="state">State <span>*</span></label>
              <select
                class="form-input"
                name="state"
                id="state"
                v-model="user.state"
              >
                <option selected value="">Select a State</option>
                <option
                  v-for="(state, index) in populatedState"
                  :key="index"
                  :value="state.name"
                >
                  {{ state }}
                </option>
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

            <button class="btn btn-primary save-changes">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "@/components/headers.vue";
import country from "@/../data/country.js";
import states from "@/../data/stateArr.js";

export default {
  data() {
    return {
      country: country,
      states: states,
      user: {
        country: "",
        state: "",
      },
    };
  },
  components: {
    headers,
  },
  methods: {
    onChange(event) {
      // let country = this.country.filter(
      //   (element) => element.name == event.target.value
      // );
      let countryIndex = 0;
      for (let i = 0; i < this.country.length; i++) {
        if (this.country[i].name === event.target.value) {
          countryIndex = i + 1;
          // console.log(i);
        }
      }
      this.populatedState = this.states[countryIndex].name.split("|");
      // console.log(this.states[countryIndex].name.split("|"));
      // console.log(countryIndex);

      // let country = this.country.indexOf(event.target.value);
    },
  },
};
</script>

<style scoped>
body {
  background-color: var(--color-background);
  background-color: #f5f8ff;
}

form {
  height: auto;
}

/* For Mobile Devices <= 520px */

/* Nav Bar */
.nav-bar {
  display: none;
}

.nav-small {
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
}

.nav-small img {
  width: 25px;
  height: 25px;
  opacity: 0.8;
}

.main-wrapper {
  background: var(--color-secondary);
  box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 20px 40px;
  padding-bottom: 30px;
}

.main-wrapper .title {
  display: none;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-direction-column {
  flex-direction: column;
  width: 100%;
}

.image-container {
  height: 260px;
  width: 80%;
}

.form-container {
  width: 80%;
  margin-top: 10px;
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

.w-50 {
  width: 50% !important;
}

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
}

/* For Tablet (799 - 521) */

@media (max-width: 799px) and (min-width: 521px) {
  .nav-small {
    display: none;
  }

  .nav-bar {
    display: flex;
    padding: 0 25px 0;
    justify-content: space-between;
  }

  .nav-list {
    list-style: none;
    width: 0;
    height: 0;
    margin: 0;
    gap: 15px;
  }

  .main-wrapper {
    flex-direction: column;
    width: 90%;
  }

  .main-wrapper .title {
    display: block;
    align-self: flex-start;
    padding: 25px 0 0 47px;
    margin: 0 0 30px;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
  }

  .flex-direction-column {
    flex-direction: row;
    width: 100%;
  }

  .image-container {
    align-self: flex-start;
    width: 40%;
  }

  .form-container {
    border-left: 2px solid var(--color-input);
    padding: 0 10% 0 5%;
  }

  .flex-container-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-input {
    margin-bottom: 24px;
  }
}

/* For Desktop >= 800px */
@media screen and (min-width: 800px) {
  .nav-small {
    display: none;
  }

  .nav-bar {
    display: flex;
  }

  .main-wrapper {
    flex-direction: column;
    width: 80%;
  }

  .main-wrapper .title {
    display: block;
    align-self: flex-start;
    padding: 25px 0 0 47px;
    margin: 0 0 30px;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
  }

  .flex-direction-column {
    flex-direction: row;
    width: 100%;
  }

  .image-container {
    align-self: flex-start;
    width: 30%;
  }

  .form-container {
    border-left: 2px solid var(--color-input);
    padding: 0 25% 0 5%;
  }

  .flex-container-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-input {
    margin-bottom: 24px;
  }
}
</style>
