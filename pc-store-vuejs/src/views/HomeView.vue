<script>
import axios from "axios";
import hero from "../components/home/Hero.vue";
import category from "../components/home/category.vue";
import newProducts from "../components/home/NewProducts.vue";
import deal from "../components/home/Deal.vue";
import topCategory from "../components/home/TopCategory.vue";
import service from "../components/home/Service.vue";

export default {
  name: "home",
  components: {
    hero,
    category,
    newProducts,
    deal,
    topCategory,
    service,
  },

  data() {
    return {
      categories: {},
      RecentlyAddedProducts: {},
    };
  },

  created() {
    this.getCategories();
    this.getRecentlyAddedProducts();
  },

  methods: {

    async getCategories() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/categories`
        );
        this.categories = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getRecentlyAddedProducts() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/recently-added-products`
        );
        this.RecentlyAddedProducts = response.data;
        console.log(this.RecentlyAddedProducts)
      } catch (error) {
        console.log(error);
      }
    },

  }

};
</script>

<template>
  <section>
    <hero />
  </section>
  <section>
    <category :categories="categories.data"/>
  </section>
  <section>
    <newProducts :RecentlyAddedProducts="RecentlyAddedProducts.data"/>
  </section>
  <section>
    <deal />
  </section>
  <section>
    <topCategory />
  </section>
  <section>
    <service />
  </section>

</template>

<style lang="scss" scoped>

</style>
