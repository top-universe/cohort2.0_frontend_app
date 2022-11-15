<template>
  <div>
    <!-- sign up successful component -->
    <signOut v-show="signOutDisplay"></signOut>

    <header class="header">
      <!-- mobile nav -->
      <nav class="nav-small">
        <a href=""
          ><img src="@/assets/icons/less-than-solid.svg" alt="more options"
        /></a>
        <a href=""
          ><img src="@/assets/icons/bars-solid.svg" alt="hamburger icon"
        /></a>
      </nav>
      <!-- desktop nav -->
      <nav class="nav-bar">
        <a href="#">
          <h1 class="logo-text">MedBookly</h1>
        </a>
        <ul class="nav-list">
          <li class="nav-item"><a href="#">Home</a></li>
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
            <input :class="searchInput" type="tex" />
          </span>
          <span @click="openDropDown" class="profile-avatar">
            <img src="@/assets/icons/profile-avatar.svg" alt="profile_avatar" />
          </span>
          <span class="profile-name" @click="openDropDown">Adewale</span>
          <span class="details collapsible collapsible-true">
            <span class="collapse-arrow arrow-right" @click="openDropDown">
              <img
                class=""
                src="@/assets/icons/more-arrow.svg"
                alt="search_icon"
              />
            </span>
          </span>
          <div class="profile-drop" v-show="profileDropDown">
            <a href="#" @click="closeDropDown">View Profile</a>
            <a href="#" @click="showSignOut">Logout</a>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import signOut from "@/components/signOut.vue";

export default {
  data() {
    return {
      signOutDisplay: false,
      profileDropDown: false,
      searchInput: "search-close search-anim",
    };
  },
  components: {
    signOut,
  },
  methods: {
    showSignOut() {
      this.signOutDisplay = true;
      this.profileDropDown = false;
    },
    openDropDown() {
      this.profileDropDown = true;
    },
    closeDropDown() {
      this.profileDropDown = false;
    },
    openSearch() {
      this.searchInput = "nav-input search-anim";
    },
  },
};
</script>

<style scoped>
/* search input expanding css */
.search-close {
  display: none;
}

.search-anim {
  transition: all ease-in 10s;
}
/* For Mobile Devices <= 520px */
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

input {
  margin: 0;
}

/* For Desktop >= 800px */
@media screen and (min-width: 850px) {
  .nav-small {
    display: none;
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
  }

  .logo-text {
    color: var(--color-primary);
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
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

  .nav-item a {
    color: var(--color-nav-item);
    font-size: 16px;
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
}
</style>
