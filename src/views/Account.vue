<template>
  <div class="mb-5">
    <v-list class="mt-3">
      <v-list-item>
        <v-list-item-avatar size="50">
          <v-img :src="getUser.img"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h6">{{
            getUser.name
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-expansion-panels class="mt-5">
      <v-expansion-panel v-for="(item, i) in expPanels" :key="i">
        <v-expansion-panel-header>
          <v-list-item>
            <v-list-item-icon>
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.header }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content v-if="i == 1">
          <v-textarea
            rows="1"
            filled
            auto-grow
            :value="address"
            @click="btnToggle = true"
            v-model="address"
          ></v-textarea>
          <v-btn v-if="btnToggle" tile color="success" @click="addressUpdate">
            <v-icon left> mdi-pencil </v-icon>
            Save
          </v-btn>
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else>
          {{ item.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels class="mt-5">
      <v-expansion-panel v-for="(item, i) in expPanels2" :key="i">
        <v-expansion-panel-header>
          <v-list-item>
            <v-list-item-icon>
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.header }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.content }}
          <!-- <v-btn link text @click="redirect(item.link)">Github</v-btn> -->
          <v-chip class="ma-2" color="info" label>
            <v-icon left class="pr-1" small>
              {{ item.icon }}
            </v-icon>
            Github
          </v-chip>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container fluid>
      <v-btn @click="logout" block color="error">
        <v-icon small class="mr-3">fas fa-sign-out-alt</v-icon>
        Logout</v-btn
      >
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router/index";

export default {
  data: () => ({
    address: "",
    expPanels2: [
      {
        link: "https://www.github.com",
        header: "Chức năng",
        content: "Chức năng",
        icon: "fab fa-github"
      },
      {
        link: "https://www.github.com",
        header: "Chức năng",
        icon: "fas fa-code-branch",
        content: "Chức năng"
      },
      {
        link: "https://www.github.com",
        header: "Chức năng",
        content: "Chức năng",
        icon: "fas fa-lightbulb"
      },
      {
        link: "https://www.github.com",
        header: "Chức năng ",
        content: "Chức năng",
        icon: "fas fa-info"
      }
    ],
    expPanels: [
      {
        header: "Phương thức thanh toán",
        content: "Tiền mặt",
        icon: "fas fa-credit-card"
      },
      {
        header: "Địa chỉ",
        icon: "fas fa-address-card"
      },
      {
        header: "My Vouchers",
        content:
          "$$$$$$$$$$$$$$$$",
        icon: "fas fa-ticket-alt"
      }
    ],
    btnToggle: false
  }),
  computed: {
    ...mapGetters(["getUser"])
  },
  mounted() {
    this.setAddress();
  },
  methods: {
    ...mapActions(["updateAddress", "deleteUserData"]),
    setAddress() {
      this.address = this.getUser.address;
    },
    addressUpdate() {
      this.updateAddress(this.address);
      this.btnToggle = false;
    },
    redirect(link) {
      window.open(link, "_blank");
    },
    logout() {
      this.deleteUserData();
      router.push({ name: "Register" });
    }
  }
};
</script>
