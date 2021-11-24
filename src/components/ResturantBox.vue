<template>
  <v-card>
    <v-carousel height="auto" hide-delimiters cycle>
      <!-- <v-carousel-item v-for="img in data.imgSrc" :key="img"> -->
      <slot name="image"></slot>
      <slot name="parallax"></slot>
      <!-- <v-img
					width="100%"
					max-height="500px"
					:aspect-ratio="2 / 1"
					:src="img"
					:lazy-src="img"
				>
					<template v-slot:placeholder>
						<v-row
							class="fill-height ma-0"
							align="center"
							justify="center"
						>
							<v-progress-circular
								indeterminate
								color="grey lighten-5"
							></v-progress-circular>
						</v-row>
					</template>
				</v-img> -->
      <!-- <v-parallax :src="img"></v-parallax> -->
      <!-- {{ img }} -->
      <!-- </v-carousel-item> -->
    </v-carousel>
    <v-card-title>
      {{ data.name }}
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="data.rating"
          color="red"
          dense
          half-increments
          readonly
          size="20"
        ></v-rating>
        <div class="ml-2">{{ data.rating }}</div>
        <div class="ml-4">{{ data.reviews }} đánh giá</div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ data.type }}
      </div>
      <slot name="desc"></slot>
      <!-- <div class="text-justify">{{ data.desc }}</div> -->
      <div class="mt-2">
        <v-btn icon color="red">
          <v-icon>fas fa-bicycle</v-icon>
        </v-btn>
        <span class="font-weight-bold mr-5 pr-5"> Giao hàng tận nhà</span>
        <v-btn icon color="red">
          <v-icon>fas fa-clock</v-icon>
        </v-btn>
        <span class="font-weight-bold">{{ data.deliveryTime }} </span>
      </div>
    </v-card-text>

    <v-divider class="mx-5"></v-divider>

    <v-card-text>
      <v-btn color="red " class="pa-4 mx-10">
        <span class="text-truncate" style="max-width: 180px;color:white">
          <v-icon color="white">fas fa-tags</v-icon>
          Giảm món 20%
          
        </span>
      </v-btn>

      
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ResturantBox",
  props: ["data"],
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>
