import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/lib/components/Vuetify/goTo";

import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (to.name === from.name) {
      scrollTo = 0;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return new Promise(resolve => {
      goTo(scrollTo).then(() => {
        resolve({ x: 0, y: scrollTo });
      });
    });
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () => import(/* webpackChunkName: "map" */ "./views/Map.vue")
    },
    {
      path: "/achievement",
      name: "achievement",
      component: () =>
        import(/*webpackChunkName: "achievement*/ "./views/Achievement.vue")
    },
    {
      path: "/reward",
      name: "reward",
      component: () =>
        import(/*webpackChunkName: "achievement*/ "./views/Reward.vue")
    },

    {
      path: "/profile",
      name: "profile",
      component: () =>
        import(/*webpackChunkName: "achievement*/ "./views/Profile.vue")
    }
  ]
});
