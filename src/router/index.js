import Vue from 'vue';
import VueRouter from 'vue-router';
import PokeTable from '../components/PokeTable/PokeTable';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokeTable,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
