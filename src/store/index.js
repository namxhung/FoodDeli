import Vue from "vue";
import Vuex from "vuex";

import resturants from "./modules/resturants";
import cart from "./modules/cart";
import user from "./modules/user";

Vue.use(Vuex);
// console.log(user.state.isAuthenticated)
export default new Vuex.Store({
  state: {
    items: [
      {
        text: "Đặt món",
        to: "/",
        icon: "mdi-food-fork-drink",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            return true;
          },
        },
      },
      {
        text: "Khám phá",
        to: "/go-out",
        icon: "mdi-shoe-print",
        meta: {
          showToolbar: false,
          // showBottomNav: true,
          showBottomNav: () => {
            return true;
          },
        },
      },
      {
        text: "Đơn hàng",
        to: "/history",
        icon: "mdi-clipboard-text-clock        ",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return true;
            else return false;
          },
        },
      },
      {
        text: "Tài khoản",
        to: "/account",
        icon: "mdi-account-child-circle",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return true;
            else return false;
          },
        },
      },
      {
        text: "SignUp / Login",
        to: "/new-user",
        icon: "fas fa-sign-in-alt",
        meta: {
          showToolbar: true,
          // showBottomNav: true,
          showBottomNav: () => {
            // console.log(user)
            if (user.state.isAuthenticated) return false;
            else return true;
          },
        },
      },
    ],
    theme: false,
    loading: false,
  },
  getters: {
    appBarLinks: (state) =>
      state.items.filter((link) => link.meta.showToolbar === true),
    bottomLink: (state) =>
      state.items.filter((link) => link.meta.showBottomNav() === true),
    theme: (state) => state.theme,
    loading: (state) => state.loading,
  },
  mutations: {
    updateLoadingState(state, payload) {
      state.loading = payload;
    },
  },
  actions: {},
  modules: {
    resturants,
    cart,
    user,
  },
});
