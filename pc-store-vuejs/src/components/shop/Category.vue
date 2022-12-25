<template>
  <div class="category">
    <h3 class="title pb-3">Categories</h3>
    <ul class="categoryList">
      <li
        v-for="category in categories.data"
        :key="category.id" class="p-2"
        v-bind:class="category.isParent ? 'childCategory px-3' : 'parentCategory my-2'"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Products",
  data() {
    return {
      categories: {},
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/categories`
        );
        this.categories = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
