import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Home.vue";
import Signup from "../pages/auth/signup.vue";
import Signin from "../pages/auth/signin.vue";
<<<<<<< HEAD
import personalProfile from "../pages/profile/personalProfile.vue";
=======
import FacultyProfile from "../pages/profile/facultyProfile.vue";
>>>>>>> 68999b34bfd394c864ead48524f577ec7f192bc9

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Index },
    { path: "/signup", name: "Sign up", component: Signup },
    { path: "/signin", name: "Sign in", component: Signin },
    {
<<<<<<< HEAD
      path: "/personal-profile",
      name: "Personal Profile",
      component: personalProfile,
    },
    {
=======
>>>>>>> 68999b34bfd394c864ead48524f577ec7f192bc9
      path: "/facultyprofile",
      name: "Faculty Profile",
      component: FacultyProfile,
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
