<template>
  <header>
    <!-- sign up successful component -->
    <signOut v-show="signOutDisplay"></signOut>

    <nav class="nav-small">
      <a href="#"
        ><img
          class="back-button"
          src="../assets/icons/back.svg"
          alt="back arrow"
        />
      </a>
      <a class="collasped-meun" href="#" @click="toggleMobilePopOpen"
        ><img
          class="collasped-meun"
          src="../assets/icons/bars-solid.svg"
          alt="hamburger icon"
        />
      </a>
    </nav>

    <!-- desktop nav -->
    <nav class="nav-bar">
      <a href="#">
        <h1 class="logo-text">MedBookly</h1>
      </a>
      <ul class="nav-list">
        <router-link class="nav-item" to="/"><a href="#">Home</a></router-link>
        <li class="nav-item"><a href="#">Booking</a></li>
        <li class="nav-item"><a href="#">Settings</a></li>
      </ul>
      <div class="profile-end">
        <span class="search-input">
          <img
            class="search-icon"
            src="@/assets/icons/search-icon.svg"
            alt="search_icon"
            @click="openSearch"
          />
          <input :class="searchInput" type="text" />
        </span>
        <div class="profile-container" @click="handleToggle">
          <span class="profile-avatar"
            ><img
              src="../assets/icons/profile-avatar.svg"
              alt="profile_avatar"
            />
          </span>
          <span class="profile-name">Adewale</span>
          <span class="details collapsible collapsible-true">
            <span class="collapse-arrow arrow-right">
              <img
                class=""
                src="../assets/icons/more-arrow.svg"
                alt="search_icon"
                @click="openSearch"
              />
            </span>
          </span>
        </div>
        <div v-show="profileDropDown" class="profile-drop">
          <a href="#">View Profile</a>
          <a href="#" @click="showSignOut">Logout</a>
        </div>
      </div>
    </nav>

    <!-- mobile nav popup -->
    <div class="mobile-pop" v-show="showMobilePop">
      <div class="popContainer">
        <div class="cancleicon">
          <a href=""><img src="../assets/icons/Search.svg" alt="" /></a>
          <a href=""
            ><img
              src="../assets/icons/Closecancel.svg"
              class="cancle"
              alt=""
              @click="toggleMobilePopClose"
          /></a>
        </div>

        <nav>
          <ul>
            <router-link class="mobileList" to="/"
              ><a href="#">Home</a></router-link
            >
            <li class="mobileList"><a href="#">Booking</a></li>
            <li class="mobileList"><a href="#">Profile</a></li>
            <li class="mobileList"><a href="#" class="stn">Settings</a></li>
          </ul>
        </nav>

        <div class="logout">
          <a href="#" @click="showSignOut">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import signOut from "@/components/signOut.vue";
export default {
  name: "navBar",
  data() {
    return {
      profileDropDown: false,
      signOutDisplay: false,
      searchInput: "search-close search-anim",
      showMobilePop: false,
    };
  },
  components: {
    signOut,
  },
  methods: {
    handleToggle() {
      this.profileDropDown = !this.profileDropDown;
    },
    showSignOut() {
      this.signOutDisplay = !this.signOutDisplay;
      this.profileDropDown = false;
    },
    openSearch() {
      this.searchInput = "nav-input search-anim";
    },
    toggleMobilePopOpen() {
      this.showMobilePop = true;
    },
    toggleMobilePopClose() {
      this.showMobilePop = false;
    },
  },
};
</script>

<style scoped>
/* For Mobile Devices */

/* collapse search bar */
.search-close {
  display: none;
}
.search-anim {
  transition: all ease-in 10s;
}

.nav-input {
  border-radius: 10px;
  padding-right: 12px;
  color: var(--color-nav-item);
  width: 170px;
  max-width: 170px;
}

.nav-bar {
  display: none;
}

.nav-small {
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  position: fixed;
  z-index: 800;
  background: #f5f8ff;
}

.collasped-meun {
  width: 22px;
  height: 19px;
}

.back-button {
  width: 12.75px;
  height: 20.3px;
}

/* mobile nav side popup */

.mobile-pop {
  background: rgba(0, 0, 0, 0.537);
  position: absolute;
  z-index: 900;
  width: 100vw;
  height: 100vh;
}

.popContainer {
  position: absolute;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: white;
  left: 50%;
}

.cancleicon {
  padding: 20px;
  width: 100%;
  /* height: 30px; */
  border-bottom: 0.5px solid #bfbfbf;
}

.cancle {
  position: absolute;
  right: 20px;
}

.cancleicon img {
  width: 22px;
}

nav ul li {
  list-style-type: none;
}

.mobileList a {
  text-decoration: none;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 16px;
  padding-left: 25px;
  border-bottom: 0.5px solid #bfbfbf;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #262626;
}

a.stn {
  color: #246bfd;
}

.logout {
  position: absolute;
  bottom: 2%;
  right: 13px;
  margin-right: 5vw;
}

.logout a {
  text-decoration: none;
  color: red;
  font-size: 13px;
}

/* For Desktop >= 800px */
@media screen and (min-width: 800px) {
  .mobile-pop {
    display: none;
  }
  .nav-small {
    display: none;
  }

  .profile-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 16px 5%;
    box-shadow: 0px 4px 20px rgba(186, 197, 255, 0.25);
    background: var(--color-secondary);
    position: fixed;
    z-index: 999;
  }

  .logo-text {
    color: var(--color-primary);
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }

  .nav-input {
    border-radius: 10px;
    padding-right: 12px;
    color: var(--color-nav-item);
    width: 170px;
    max-width: 170px;
  }

  .search-input {
    display: flex;
    border: 1px solid var(--color-placeholder);
    border-radius: 10px;
    color: var(--color-placeholder);
    outline: 0;
  }

  .search-input .nav-input {
    border: 0;
    flex-grow: 1;
    outline: 0;
  }

  .search-input img {
    margin: 11.29px;
  }
  .nav-bar a {
    text-decoration: none;
    transition: color 0.5s;
  }

  .nav-list {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 450px;
    max-width: 450px;
  }

  .nav-item:hover a {
    color: var(--color-primary);
  }

  .nav-item:active a {
    color: var(--color-primary);
  }

  .nav-item a {
    font-size: 16px;
    color: var(--color-nav-item);
  }

  .profile-end {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .profile-name {
    font-size: 16px;
    color: var(--color-nav-item);
  }

  /* collapse version */

  .nav-input {
    border-radius: 10px;
    padding-right: 12px;
    color: var(--color-nav-item);
    width: 170px;
    max-width: 170px;
    margin: 0;
  }

  .search-input {
    display: flex;
    border: 1px solid var(--color-placeholder);
    border-radius: 10px;
    color: var(--color-placeholder);
    outline: 0;
  }

  .search-input .nav-input {
    border: 0;
    flex-grow: 1;
    outline: 0;
  }

  .search-input img {
    margin: 11.29px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  .profile-drop {
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 197px;
    height: 104px;
    padding: 21px 30px;
    border-radius: 0 0 0 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    position: absolute;
    top: 80px;
    right: 0;
  }

  .profile-drop a {
    padding-bottom: 21px;
    color: var(--color-nav-item);
  }

  .profile-drop a:hover {
    color: var(--color-primary);
  }

  .profile-drop a:last-child {
    color: var(--color-danger);
  }

  .collapse-arrow {
    transform: rotate(-90deg);
  }

  .collapsible-content {
    display: none;
  }

  .collapsible-true .collapse-arrow {
    transform: rotate(0);
  }

  .collapsible-true .collapsible-content {
    display: block;
  }

  /* .rotate-arrow-enter-active,
.rotate-arrow-leave-active {
  transition: opacity 0.5s ease;
}

.rotate-arrow-enter-from,
.rotate-arrow-leave-to {
  opacity: 0; */
  /* } */
}
</style>
