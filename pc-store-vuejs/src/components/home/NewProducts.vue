<template>
  <div class="newPost mt-5">
    <div class="container">
      <!-- {{RecentlyAddedProducts}} -->
      <div class="head">
        <h4>RECENTLY ADDED</h4>
        <span class="bt-line"></span>
      </div>
      <div class="row mt-4">
        <div class="col-md-3" v-for="item in RecentlyAddedProducts" :key="item.id">
          <div class="product">
            <RouterLink :to="'/show_product/' + item.slug">
              <img src="@/assets/image/home/p1.jpg" alt="" />
            </RouterLink>
            <div class="content">
              <h5><RouterLink :to="'/show_product/' + item.slug">{{ item.name }}</RouterLink></h5>
              <p class="font-2">{{ item.categoryName }}</p>
              <p class="price">{{ item.price }} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "newProducts",
  props: ["RecentlyAddedProducts"],
};
</script>

<style lang="scss" scoped>
.newPost {
  .head {
    h4 {
      margin-bottom: 0;
    }
    span {
      display: inline-block;
      width: 99.4%;
      height: 2px;
      position: relative;
      background: #ebebeb;
      &:after {
        content: "";
        position: absolute;
        width: 210px;
        height: 2px;
        background: #0049b7;
      }
    }
  }
  .product {
    img {
      width: 300px;
      height: 300px;
      border: 1px solid #dddddd;
      transition:  .1s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
    .content {
      text-align: center;
      padding: 1rem;
      h5 {
        text-transform: uppercase;
        font-size: 16px;
        margin-top: 0.4rem;
      }
      p {
        margin-bottom: 5px;
      }
      .price {
        color: #0049b7;
        font-size: 14px;
      }
    }
  }
}
</style>
