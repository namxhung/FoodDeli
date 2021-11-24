<template>
  <v-bottom-navigation
    color="error"
    light
    grow
    app
    height="auto"
    class="py-0 mt-3"
    background-color="#FFEEDB"
  >
    <v-btn
      class="py-5"
      text
      
      v-for="(link, i) in bottomLink"
      :key="i"
      :to="link.to"
      @click="navigate($event, link)"
      style="height: max-content;font-weight: bold"
            

    >
      <span>{{ link.text }}</span>
      <v-icon class="pb-1">{{ link.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "BottomNav",
  data: () => ({ value: 1 }),
  computed: {
    ...mapGetters(["bottomLink"])
  },
  methods: {
    navigate(event, link) {
      console.log(event);
      if (link.to || !link.href) return;
      this.$vuetify.goTo(link.href);
    }
  }
};
</script>
