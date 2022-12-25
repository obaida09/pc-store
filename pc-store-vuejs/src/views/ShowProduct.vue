<script>
import axios from "axios";

export default {
  data() {
    return {
      product: '',
      slug: location.pathname.replace('/show_product/', ''),
      counter: 1,
    };
  },
  methods: {
    async getTags() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/product?slug=${this.slug}`
        );
        this.product = response.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    goToCategory(categoryId) {
      localStorage.setItem('categoryId', categoryId)
    },

    changeCounter: function(num){
				this.counter += +num
				!isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 1;    
			}

  },
  created() {
    this.getTags();
  }
}
</script>

<template>
  <div class="showProduct mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="images">
            <div class="row">
              <div class="col-md-2">
                <div class="slick-list">
                  <div class="slick-traq">
                    <img src="@/assets/image/home/p1.jpg" class="w-100" alt="Image Product">
                  </div>
                </div>
              </div>
              <div class="col-md-10">
                <div class="image-additional">
                  <!-- <img :src="this.product.first_media.file_name" alt="Image Product"> -->
                  <img src="@/assets/image/home/p1.jpg" class="w-80" alt="Image Product">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="details ps-2">
            <h1>{{ this.product.name }}</h1>
            <div class="price mt-2 tx-second">{{ this.product.price * this.counter }} $</div>
            <div class="quantity mt-3">
              <div class="operation d-inline-block">
                <button @click="changeCounter('-1')" type="button" class="minus p-2">-</button>
                <input type="text" :value="counter">
                <button @click="changeCounter('1')" type="button" class="plus p-2">+</button>
              </div>
              <button class="add-cart mx-3 px-3">Add to Cart</button>
            </div>
            <div class="categoryName mt-4">
              <span class="tx-second">Category:</span> <RouterLink @click="goToCategory(this.product.category.id)" to="/shop">{{ this.product.category.name }}</RouterLink>
            </div>
            <div class="tags mt-3">
              <ul>
                <span class="tx-second">Tags:</span>
                <li class="tag px-2 mx-1" v-for="tag in this.product.tags" :key="tag.id">{{ tag.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="relatedProducts">
        <h5 class="head"></h5>
        <div class="row">
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showProduct {
  .images {
    .slick-list {
      .slick-traq {
        border: 1px solid #ff1d58;
      }
    }

    .image-additional {
      border: 1px solid #dddddd;

      img {
        width: 80%;
        margin-left: 3rem;
      }
    }
  }

  .details {
    h1 {
      color: #1b1b1b;
    }

    .price {
      font-weight: 700;
      font-size: 25px;
    }

    .quantity {
      .operation {
        input {
          border: none;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          outline: none;
          height: 44px;
          width: 80px;
          text-align: center;
          font-size: 26px;
          display: inline-block;
          vertical-align: middle;
          color: #1b1b1b;
        }
        .minus,
        .plus {
          width: 44px;
          height: 44px;
          background: #fff;
          padding: 18px 5px;
          border: 1px solid #ddd;
          vertical-align: middle;
          text-align: center;
        }

      }
      .add-cart {
        height: 44px;
        border: 1px solid #ff1d58;
        color: #fff;
        background: #ff1d58;
        transition: .3s ease-in-out;
        &:hover {
          background: #ff002b;
        }
      }
    }

    .categoryName {
      color: #1b1b1b;
      li {
        cursor: pointer;
      }
    }

    .tags {
      ul {
        li.tag {
          display: inline-block;
          background: #f1f1f1;
          font-size: 12px;
          padding-top: 2px;
          padding-bottom: 2px;
          color: #1b1b1b;
        }
      }
    }
  }
}
</style>