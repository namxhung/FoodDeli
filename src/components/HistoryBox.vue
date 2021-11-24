<template>
  <v-card class="mx-auto">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          Yes Coffee
        </v-list-item-title>
        <v-list-item-subtitle> </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="my-n2">
      <v-chip color="green" text-color="white" small>
        <v-icon x-small >fas fa-check-circle </v-icon>
        Hoàn thành
      </v-chip>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle>Mã đơn hàng: {{Math.floor((Math.random()*100000) + 10000)}}</v-list-item-subtitle>
        <v-list-item-title> 12:30 ngày 20/11/2021 </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="my-n3">
      <v-rating
        v-model="rating"
        background-color="red lighten-3"
        color="red"
      ></v-rating>
    </v-list-item>
    <v-data-table
      mobile-breakpoint="0"
      :headers="headers"
      :items="order"
      hide-default-header
      hide-default-footer
    ></v-data-table>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-row>
          <v-col style="font-weight: bold" cols="9">Tổng cộng</v-col>
          <v-col cols="3"><span style="font-weight: bold" class="ml-md-12">$60</span></v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions class="">
      <v-btn
        text
        depressed
        color="primary"
        to="/history/123/summary"
        @click="navigate($event, `/history/123/summary`)"
      >
        <v-icon small class="ma-2">
          fas fa-shopping-bag
        </v-icon>
        Xem chi tiết
      </v-btn>
      <v-spacer />
      <v-btn  text
        outlined
        color="red">
        <v-icon small class="ma-2" color="red">
          fas fa-redo
        </v-icon>
        Đặt lại món
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import router from '../router/index'
export default {
  data() {
    return {
      rating: 4,
      headers: [
        { text: "Items Ordered", value: "name", sortable: false },
        { text: "Quantity", value: "quantity", sortable: false },
        { text: "Price", value: "price", sortable: false }
      ],
      order: [
        {
          name: "Cafe sữa",
          quantity: "x3",
          price: "$15"
        },
        { name: "Bánh trứng", quantity: "x5", price: "$20" },
        {
          name: "Chè Thái",
          quantity: "x1",
          price: "$25"
        }
      ]
    };
  },
  methods: {
    navigate(event, link) {
      this.$vuetify.goTo(link);
    }
  }
};
</script>
