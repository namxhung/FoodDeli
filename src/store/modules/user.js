import api from "../../api/index";

export default {
  state: {
    isAuthenticated: false,
    userName: "namxhung",
    userAddress: "",
    userEmail: "jw1xf5lyckb@temporary-mail.net",
    randomPaymentString: "Thanh toán bằng tiền mặt",
    userLocation: "",
    phoneNumber: Number,
    password: String,
    userImg:
      "https://banner2.cleanpng.com/20180515/gkq/kisspng-tom-cruise-youtube-magnolia-actor-5afa8b1731b386.8705813315263690472036.jpg"
  },
  getters: {
    getUser: state => {
      return {
        name: state.userName,
        address: state.userAddress,
        raPaSy: state.randomPaymentString,
        img: state.userImg,
        loc: state.userLocation,
        phoneNumber: state.phoneNumber
      };
    },
    getCity: state => {
      return state.userLocation;
    },
    getAuthentication: state => state.isAuthenticated
  },
  mutations: {
    setAddress(state, payload) {
      state.userAddress = payload;
    },
    setCity(state, payload) {
      console.log(payload);
      state.userLocation = payload;
    },
    setUserData(state, payload) {
      state.userName = payload.name;
      state.userAddress = payload.address;
      state.userEmail = payload.email;
      state.userLocation = payload.city;
      state.phoneNumber = payload.phoneNumber;
      state.password = payload.password;
      state.isAuthenticated = true;
    },
    unsetUserData(state) {
      state.userName = "";
      state.userAddress = "";
      state.userEmail = "";
      state.userLocation = "";
      state.phoneNumber = "";
      state.password = "word";
      state.isAuthenticated = false;
    }
  },
  actions: {
    updateAddress({ commit }, payload) {
      console.log(payload);
      commit("setAddress", payload);
    },
    getUserLocation({ commit }) {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            const key = "pk.ee127d8aab8981c5bf20facbba5ef31d";
            fetch(
              `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
            )
              .then(res => res.json())
              .then(res => {
                console.log(res);
                commit("setAddress", res.display_name);
                commit("setCity", res.address.city);
              })
              .catch(err => console.log(err));
          },
          error => console.log(error)
        );
      }
    },
    updateUserData({ commit }, payload) {
      commit("setUserData", payload);
      api.signUpUser(payload);
    },
    deleteUserData({ commit }) {
      commit("unsetUserData");
      api.logout();
    }
  }
};
