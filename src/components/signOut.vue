<template>
  <div class="background-container" v-show="signOutDisplay">
    <div class="signout-container">
      <div class="signout-header-text">Sign Out</div>
      <div class="signout-sub-text">Are you sure you want to sign out?</div>
      <div class="signout-button-container">
        <button @click="close" class="btn-cancel">Cancel</button>
        <router-link to="signin"><button @click="handleSignOut" class="btn-signout">Sign Out</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signOut",
  data() {
    return {
      signOutDisplay: true,
    };
  },
  methods: {
    handleSignOut() {
      alert("signed out");
    },
    close() {
      this.signOutDisplay = false;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

.background-container {
  width: 100vw;
  height: 100vh;
  padding: 70px 0px;
  margin: auto;
  justify-content: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.537);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
}
.signout-container {
  background-color: #fff;
  width: 300px;
  position: relative;
  box-shadow: 0px 0px 40px rgba(25, 119, 243, 0.1);
  border-radius: 10px;
  padding: 40px 20px;
  margin: auto;
  animation: scale 0.2s forwards ease-in;
}

.signout-header-text {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin: 10px auto 36px;
}

.signout-sub-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: auto auto 42px;
}

.signout-button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}

.btn-cancel {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  width: 73px;
  height: 22px;
  border: none;
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  padding: 4px 15px;
  cursor: pointer;
}

.btn-cancel:active {
  color: #8c8c8c;
}

.btn-signout {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  padding: 4px 15px;
  background: #e32f2f;
  width: 103px;
  height: 30px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border: 1px solid #e32f2f;
  border-radius: 3px;
  margin-left: 16px;
  cursor: pointer;
}

.btn-signout:hover {
  background: #c12828;
  border: 1px solid #c12828;
}

.btn-signout:active {
  background: #e85454;
  border: 1px solid #e85454;
  box-shadow: 0px 0px 0px 5px #e854541a;
}

@keyframes scale {
  0% {
    transform: scale(1, 1);
  }
  70% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

@media (min-width: 1280px) {
  .signout-container {
    width: 500px;
    padding: 70px 50px;
  }
}
</style>
