<template>
  <header>
    <nav class="nav-small">
      <a href="#"
        ><img
          class="back-button"
          src="../assets/icons/back.svg"
          alt="back arrow"
        />
      </a>
      <a class="collasped-meun" href="#"
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
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">Booking</a></li>
        <li class="nav-item"><a href="#">Settings</a></li>
      </ul>
      <div class="profile-end">
        <span class="search-input">
          <img
            class="search-icon"
            src="../assets/icons/search-icon.svg"
            alt="search_icon"
          />
          <input class="nav-input" type="text" />
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
              />
            </span>
          </span>
        </div>
        <div v-show="profileDrop" class="profile-drop">
          <a href="#">View Profile</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      profileDrop: false,
    };
  },
  methods: {
    handleToggle() {
      this.profileDrop = !this.profileDrop;
    },
  },
};
</script>

<style scoped>
/* For Mobile Devices */

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

/* For Desktop >= 800px */
@media screen and (min-width: 800px) {
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
