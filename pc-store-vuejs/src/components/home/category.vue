<template>
  <div class="category mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="categories mt-4">
            <div class="head">
              <h6>
                Categories
                <span class="float-end"><i class="fa-solid fa-grip-lines"></i></span>
              </h6>
            </div>
            <ul>
              <li v-for="category in categories" :key="category.id">
                <span class="icon-categ me-3 opacity-50"><i class="fa-solid fa-laptop"></i></span>
                <RouterLink @click="goToCategory(category.id)" to="/shop">{{ category.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9 mt-4">
          <div class="row">
            <div class="col-md-6">
              <div class="section-1 pt-2 pb-4">
                <img src="@/assets/image/home/main.png" alt="" />
                <div class="content mt-4 px-4">
                  <p class="font-2">Amaizing Deals</p>
                  <h4><span class="font-2">for</span> gaming computers</h4>
                  <button type="button" class="btn btn-primary mt-3">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="section-1 pb-4">
                <img src="@/assets/image/home/pc2.jpg" alt="" />
                <div class="content mt-4 px-4">
                  <p class="font-2">Amaizing Deals</p>
                  <h4><span class="font-2">for</span> gaming computers</h4>
                  <button type="button" class="btn btn-primary mt-3">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  props: ['categories'],

  methods: {
    goToCategory(categoryId) {
      localStorage.setItem('categoryId', categoryId)
      console.log('asdddgd')
    },
  }
};
</script>

<style lang="scss" scoped>
.category {
  min-height: 600px;

  .categories {
    .head {
      border-radius: 7px 7px 0 0;
      background: #0049b7;
      color: #fff;
      padding: 14px 20px 6px;
    }
    ul {
      overflow-y: scroll;
      max-height: 495px;
      li {
        border: 1px solid rgb(221, 221, 221);
        border-top: none;
        padding: 15px 2rem;
      }
    }
  }

  .section-1 {
    overflow: hidden;
    height: 542px;
    background: #dee7f0;
    border: 1px solid rgb(221, 221, 221);
    img {
      height: 300px;
      object-fit: cover;
    }
    p {
      margin-bottom: 0;
    }
    h4 {
      text-transform: uppercase;
    }
    button {
      border: 3px solid #0049b7;
      color: #0049b7;
      background: none;
      border-radius: 35px;
      padding: 7px 25px;
      transition: 0.3s;
      &:hover {
        color: #ff1d58;
        border: 3px solid #ff1d58;
      }
    }
  }

  .categories ul::-webkit-scrollbar {
    width: 0.2em;
  }

  .categories ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #0049b707;
  }

  .categories ul::-webkit-scrollbar-thumb {
    background-color: #0231771e;
    outline: 1px solid #0231771e;
    border-radius: 5px;
  }
}
</style>
