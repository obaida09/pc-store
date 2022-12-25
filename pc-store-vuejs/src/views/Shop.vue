<script>
import axios from "axios";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import products from "../components/shop/Products.vue";
import tags from "../components/shop/Tags.vue";

export default {
  name: "shop",
  watch: {
    categoryId() {
      localStorage.setItem("categoryId", this.categoryId)
      this.getTags();
      this.getProducts();
    },

    sortByTags() {
      this.getProducts();
    },

    sortByPrice() {
      this.getProducts();
    }
  },
  components: {
    products,
    Bootstrap5Pagination,
    tags,
  },
  data() {
    return {
      categories: {},
      products: {},
      tags: {},
      sortByTags: [],
      sortByPrice: '',
      categoryId: localStorage.getItem("categoryId"),
    };
  },
  created() {
    this.getCategories();
    this.getProducts();
    this.getTags();
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

    async getProducts(page = 1) {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/products',
          { params: {
            page: page,
            categoryId: this.categoryId, 
            sortByTags: this.sortByTags, 
            sortByPrice: this.sortByPrice, 
          }}
        );
        this.products = response.data.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getTags() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/tags?categoryId=${this.categoryId}`
        );
        this.tags = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    submit() {
      this.$emit("getTags");
    },

    sort_by_tags(sortByTags) {
      this.sortByTags = sortByTags;
    },

    openSubCategory: function (id) {
      var getById = `#category-${id}`
      if ($(`${getById} ul`).hasClass("d-block") && id != this.categoryId) {
        $(`${getById}`).removeClass("text-primary");
        $(`${getById} ul`).removeClass("d-block");
        $(`${getById} .arrow-down .down`).css('transform', 'rotate(' + 0 + 'deg)');
      } else {
        $(`${getById}`).addClass("text-primary");
        $(`${getById} ul`).addClass("d-block");
        $(`${getById} .arrow-down .down`).css('transform', 'rotate(' + 180 + 'deg)');
      }
    },

    activeCateg: function (id) {
      $(id).addClass("text-primary");
      $(`${id} ul`).addClass("d-block");
    },
  },
};
</script>

<template>
  <div class="shop mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul class="categories">
            <h4 class="title mb-1">Categories</h4>
            <span class="bt-line mb-2"></span>
            <li class="parentCategory font-lato" :id="'category-' + category.id" v-for="category in categories.data"
              :key="category.id"
              >
              <div class="parent pt-2 pb-1" >
                <span class="arrow"><i class="fa-solid fa-chevron-right"></i></span>
                <span class="categoryName"
                :data-parent="category.id == this.categoryId ? this.activeCateg('#category-' + category.id) : ''"
                  @:click="
                  this.categoryId = category.id;
                  openSubCategory(category.id)
                "
              >{{ category.name }}</span>
                <span @click="openSubCategory(category.id)" class="arrow-down float-end pe-4"><i
                    class="fa-solid fa-chevron-down down"></i></span>
              </div>
              <ul class="subCategoryList px-2">
                <li v-for="subCategory in category.children" class="px-4 py-1" :id="'sub-' + subCategory.id"
                  :data-parent="subCategory.id == this.categoryId ? this.activeCateg('#category-' + category.id) : ''"
                  :key="subCategory.id" :class="subCategory.id == this.categoryId ? 'text-primary' : ''" 
                  @:click="
                    this.categoryId = subCategory.id;
                  reload;
                  this.activeCateg('category-' + category.id);
                  ">
                  <span class="arrow"><i class="fa-solid fa-chevron-right"></i></span>
                  {{ subCategory.name }}
                </li>
              </ul>
            </li>
          </ul>
          <div class="priceRange">

          </div>
          <hr />
          <div class="tags py-1 mt-3 px-3">
            <h4 class="title pt-3">Tags</h4>
            <ul class="tag px-2">
              <tags @sortByTags="sort_by_tags" :tags="tags.data" />
            </ul>
          </div>
        </div>
        <div class="col-md-9 mt-3">
          <div class="product-section">
            <div class="top-bar d-flex justify-content-between">
              <div class="result-count">
                <p class="font-lato mb-0">
                  Showing {{ products.meta.from }}– {{ products.meta.to }} of {{ products.meta.total }} item(s)
                </p>
              </div>
              <div class="dropdown">
                <select class="form-control" v-model="sortByPrice" name="value">
                  <option value="default">Default Sorting</option>
                  <option value="latest">Latest</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>
            <hr />
            <div class="row">
              <products v-for="product in products.data" :key="product.id" :name="product.name" :slug="product.slug"
                :image="product.image" :categoryName="product.categoryName" :price="product.price" />
            </div>
            <div class="pagination mt-4 me-5 float-end">
              <Bootstrap5Pagination :data="products" @pagination-change-page="getProducts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  .categories {
    user-select: none;

    .title {
      text-transform: uppercase;
    }

    .bt-line {
      display: inline-block;
      width: 93.4%;
      height: 2px;
      position: relative;
      background: #0000001f;

      &:after {
        content: "";
        position: absolute;
        width: 25%;
        height: 3px;
        background: #0357d4;
      }
    }

    .parentCategory {
      color: #666;
      font-size: 15px;
      .parent {
        font-size: 15px;
        .categoryName {
          cursor: pointer;
          &:hover {
            color: #0453ca;
        }
        }
      }

      .arrow,
      .arrow-down {
        font-size: 10px;
        padding-right: 6px;
        line-height: 25px;
      }

      .arrow-down {
        cursor: pointer;
      }

      .subCategoryList {
        display: none;
        transition: 1s;

        li {
          cursor: pointer;
          color: #666;

          &:hover {
            color: #0453ca;
          }
        }
      }
    }
  }

  .tags {
    background: rgba(245, 245, 245, 0.658);

    .tag {
      max-height: 250px;
      overflow-y: scroll;

      position: relative;
    }

    .tag::-webkit-scrollbar {
      width: 0.2em;
    }

    .tag::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px #0049b707;
    }

    .tag::-webkit-scrollbar-thumb {
      background-color: #0231771e;
      outline: 1px solid #0231771e;
      border-radius: 5px;
    }
  }

  .product-section {
    .result-count {
      p {
        line-height: 2.2rem !important;
      }
    }
    .dropdown {
      max-width: 150px;
      .form-control {
        font-size: 14px;
        border: 1px solid #d4d4d4;
        border-radius: 0;

        &:hover {
          background: none;
        }
      }
    }
  }
}
</style>
