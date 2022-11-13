import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Home.vue";
import Signup from "../pages/auth/signup.vue";
import Signin from "../pages/auth/signin.vue";
import personalProfile from "../pages/profile/personalProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Index },
    { path: "/signup", name: "Sign up", component: Signup },
    { path: "/signin", name: "Sign in", component: Signin },
    {
      path: "/personal-profile",
      name: "Personal Profile",
      component: personalProfile,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
