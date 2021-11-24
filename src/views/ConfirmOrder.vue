<template>
  <div>
    <v-app-bar app fixed flat elevate-on-scroll scroll color="#EEEEEE">
      <v-btn icon @click="backNavigation">
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>
      <span>Đơn hàng của bạn</span>
    </v-app-bar>
    <v-card class="mt-3">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="order.rImg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ order.rName }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="mt-3">
      <v-list-item class="pa-0">
        <v-list-item-content class="pa-0">
          <v-data-table
            mobile-breakpoint="0"
            :headers="headers"
            :items="list"
            hide-default-header
            hide-default-footer
          ></v-data-table>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          Tổng món
        </v-list-item-content>
        <v-list-item-content class="text-right mr-3">
          <span>${{ order.totalPrice }} </span>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Phí vận chuyển
        </v-list-item-content>
        <v-list-item-content class="text-right mr-3">
          <span>${{ order.deliveryCharges }} </span>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content class="font-weight-bold text-h5">
          Tổng cộng
        </v-list-item-content>
        <v-list-item-content class="text-right mr-3 text-h4">
          <span>${{ totalPrice }} </span>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card class="mt-3">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="user.img"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            >Địa chỉ giao hàng</v-list-item-title
          >
          {{ user.address }}.
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card class="mt-3">
      <v-list-item>
        <!-- <v-list-item-avatar>
					<v-img
						src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
					></v-img>
				</v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title>{{ order.rName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Địa chỉ quán</v-list-item-title>
          {{ order.rAdd }}
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card class="mt-3">
      <v-list>
        <v-list-item>
          <v-row :align="align" no-gutters style="height: auto;">
            <v-list-item-icon>
              <v-col>
                <v-icon color="green">
                  fas fa-money-bill-wave
                </v-icon></v-col
              >
            </v-list-item-icon>
            <v-col>
            <v-list-item-content>
              <v-list-item-title class="text-h6 font-weight-black">
                <v-checkbox
                  v-model="ex4"
                  label="Thanh toán bằng tiền mặt"
                  color="primary"
                  value="error"
                  hide-details
                ></v-checkbox>
              </v-list-item-title>
            </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>

    <v-footer fixed>
      <v-col class="text-center" cols="12">
        <v-btn
          block
          color="red"
          @click="confirmOrder"
          to="/order/123/order-delivery"
          >Tiến hành giao hàng</v-btn
        >
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import router from "../router/index";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "ConfirmOrder",
  data() {
    return {
      headers: [
        { text: "Quantity", value: "quantity", sortable: false },
        { text: "Items Ordered", value: "name", sortable: false },
        { text: "Price", value: "price", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters({ order: "getOrder", user: "getUser" }),
    list() {
      return this.order.cart;
    },
    totalPrice() {
      return this.order.totalPrice + this.order.deliveryCharges;
    },
  },
  methods: {
    backNavigation() {
      router.go(-1);
    },
    // navigate(event, link) {
    // 	this.$vuetify.goTo(link);
    // },
    ...mapActions(["postOrder"]),
    confirmOrder() {
      console.log("confirmOrder called here");
      this.postOrder("abc");
    },
  },
};
</script>
