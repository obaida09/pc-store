<script setup lang="js">
import { RouterLink, RouterView } from "vue-router";


import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};

</script>

<template>
  <AppHeader />
  <RouterView />
  
  <div class="overlay"></div>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>contact information</h5>
          <div class="info">
            <p>Rruga e Dibres, Altahrir 153, Baqubah I, 2001, Diyala, Iraq</p>
            <label>Phone: </label> +964 772 4389 401<br>
            <label>Email: </label> mail@obaida.site
          </div>
        </div>
        <div class="col-md-4 col-xs-6">
          <h5>company</h5>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/shop">Shop Products</RouterLink></li>
            <li><RouterLink to="/cart">My Cart</RouterLink></li>
            <li><RouterLink to="/checkout">Checkout</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-4 col-xs-6">
          <h5>CATEGORIES</h5>
          <ul>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="powered-by ps-4">
      Pc Store Iraq. Ecommerce powered by <a href="">Obaida</a>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  z-index: -1;
  transition: .4s ease-in-out;
}
footer {
  margin-top: 6rem;
  padding-top: 6rem;
  padding-bottom: 4rem;
  background: #1b1b1b;
  position: relative;
  .info {
      color: #bdbcbc;
      font-size: 14px;
      p {
        margin-top: 1.6rem;
      }
      label {
        color: #ff1d58;
      }
    }
  h5 {
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1rem;
  }
  ul {
    li {
      padding: 0.4rem 0;
      a {
        color: #bdbcbc;
        font-size: 14px;
      }
    }
  }
  .powered-by {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #bdbcbc;
    background: #272727;

    a {
      color: #ff1d58;
      &:hover {
        color: #0049B7;
      }
    }
  }
}
</style>
