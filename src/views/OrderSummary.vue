<template>
  <div>
    <v-app-bar app fixed flat elevate-on-scroll scroll color="#EEEEEE">
      <v-btn icon @click="backNavigation">
        <v-icon>fas fa-arrow-left</v-icon>
      </v-btn>
      <!-- <span class="text-h6">Cafe Badilico</span> -->
    </v-app-bar>
    <v-card>
      <v-card-title class="text-h5">Chi tiết đơn hàng</v-card-title>
      <!-- <p class="text-h6 ma-3">Order Summary</p> -->
      <v-data-table
        mobile-breakpoint="0"
        :headers="headers"
        :items="order"
        hide-default-header
        hide-default-footer
      ></v-data-table>
      <v-divider></v-divider>
      <v-row>
        <v-col class="ma-3 text-left" color="grey">Tổng món </v-col>
        <v-col class="ma-3 mx-6 text-right">$145 </v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col class="ma-3 text-left" color="grey">Phí giao hàng </v-col>
        <v-col class="ma-3 mx-6 text-right">$ 100 </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col class="ma-3 text-left font-weight-bold" color="grey"
          >Tổng cộng
        </v-col>
        <v-col class="ma-3 mx-6 text-right text-h4">$ 145 </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-title>Địa chỉ giao hàng</v-card-title>
      <v-card-subtitle>
        Linh Trung, Thủ Đức
      </v-card-subtitle>
      <v-card-title>Phương thức thanh toán</v-card-title>
      <v-card-subtitle
        >Tiền mặt
      </v-card-subtitle>
      <v-card-actions>
        <v-btn block color="primary" to="/">Xác nhận đơn hàng đã hoàn thành</v-btn>
      </v-card-actions>
      <!-- <v-row>
			<v-col cols="2">5</v-col>
			<v-col cols="1">x</v-col>
			<v-col cols="6">Sweet Lemonade</v-col>
			<v-col cols="3">25.05</v-col>
		</v-row> -->
    </v-card>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  name: "Order Summary",
  data() {
    return {
      headers: [
        { text: "Quantity", value: "quantity", sortable: false },
        { text: "Items Ordered", value: "name", sortable: false },
        { text: "Price", value: "price", sortable: false },
      ],
      order: [
        {
          name: "Paneer Makhani Biryani",
          quantity: "x3",
          price: "$50",
        },
        { name: "Dahi Kebab", quantity: "x5", price: "$120" },
        {
          name: "Matar Paneer Lababdaar",
          quantity: "x1",
          price: "$75",
        },
      ],
    };
  },

  methods: {
    backNavigation() {
      router.go(-1);
    },
  },
};
</script>
