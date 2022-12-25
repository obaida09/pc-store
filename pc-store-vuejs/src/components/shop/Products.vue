<template>
  <div class="col-md-3">
    <div class="products">
      <img :src="image" alt="" />
      <div class="content">
        <h5><RouterLink :to="'/show_product/' + slug">{{ name }}</RouterLink></h5>
        <p class="font-2">{{ categoryName }}</p>
        <p class="price">Price {{ price }} $</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  props: ["image", "name", "slug", "categoryName", "price"],
};
</script>

<style lang="scss" scoped>
.products {
  img {
    width: 100%;
    border: 1px solid #dddddd;
  }
  .content {
    text-align: center;
    padding: 1rem;
    font-size: 12px;
    h5 {
      text-transform: uppercase;
      margin-top: 0.2rem;
      font-size: 12px;
    }
    p {
      margin-bottom: 5px;
    }
    .price {
      color: #0049b7;
    }
  }
}
</style>
