import Vue from 'vue';
import Router from 'vue-router';
import goTo from 'vuetify/lib/components/Vuetify/goTo';
import App from './App.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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

    return new Promise((resolve) => {
      goTo(scrollTo).then(() => {
        resolve({ x: 0, y: scrollTo });
      });
    });
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "map" */ './views/Map.vue')
    }
  ]
})
