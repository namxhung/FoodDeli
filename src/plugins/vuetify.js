import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import store from "../store/index";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: store.getters.theme,
    theme: {
      light: {
        primary: "#0A1D37",
        secondary: "#0A1D37",
        accent: "#0A1D37",
        error: "#0A1D37",
      },
    },
    
  },
});
