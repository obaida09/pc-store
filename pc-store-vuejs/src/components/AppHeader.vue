<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="el d-flex justify-content-between">
          <div class="auth">
            <ul v-if="this.customerData.token">
              <RouterLink to="/myAccount">{{ this.customerData.username }}</RouterLink> -
              <li @click="logout()">Logout</li>
            </ul>
            <ul v-else>
              <li @click="openModal('#login-modal')">Login</li> -
              <li @click="openModal('#register-modal')">Register</li>
            </ul>
          </div>
          <div class="header-logo">
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" /> -->
            <span class="font-2">PC-</span>STORE
          </div>
          <div class="header-page-link">
            <ul>
              <li class="cyrcle">
                <RouterLink to="/fav"><i class="fa-regular fa-heart"></i></RouterLink>
              </li>
              <li class="cyrcle">
                <RouterLink to="/d"><i class="fa-solid fa-cart-arrow-down"></i></RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="wrapper">
          <ul>
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <span class="break-li"></span>
            <li>
              <RouterLink to="/shop">Shop</RouterLink>
            </li>
            <span class="break-li"></span>
            <li>
              <RouterLink to="/about">About</RouterLink>
            </li>
            <span class="break-li"></span>
            <li>
              <RouterLink to="/contact">Contact</RouterLink>
            </li>
            <span class="break-li"></span>
            <li>
              <RouterLink to="/blog">Blog</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Login Modal  -->
    <div class="modal fade show d-block" id="login-modal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-4">
          <button @click="closeModal('#login-modal')" class="popup-close"><i class="fa-solid fa-xmark"></i></button>
          <div class="head">
            <h6>returning customer</h6>
            <span class="bt-line"></span>
          </div>
          <form @submit.prevent="login">
            <div class="body font-lato mt-2">
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">E-Mail Address</label>
                <input type="email" v-model="formLoginData.email" name="email" class="form-control">
              </div>
              <div class="error text-danger">{{ loginError.email ? loginError.email : '' }}</div>
              <div class="form-group d-flex justify-content-between mb-4">
                <label class="control-label">Password</label>
                <input type="password" v-model="formLoginData.password" name="password" class="form-control">
              </div>
              <div class="error text-danger">{{ loginError.password ? loginError.password : '' }}</div>
              <div class="form-check">
                <input class="form-check-input" v-model="tokenExpire" name="remember_me" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Remmember Me
                </label>
              </div>
              <RouterLink class="forgot-pass" to="/shop">Forgotten Password</RouterLink>
            </div>
            <hr>
            <div class="footer font-lato">
              <button class="btn-login">LOGIN <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Register Modal  -->
    <div class="modal fade show d-block" id="register-modal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content p-4">
          <button @click="closeModal('#register-modal')" class="popup-close"><i class="fa-solid fa-xmark"></i></button>
          <div class="head">
            <h6>your personal details</h6>
            <span class="bt-line"></span>
          </div>
          <form @submit.prevent="register">
            <div class="body font-lato mt-2">
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">First Name <span class="text-danger">*</span></label>
                <input type="text" v-model="formRegisterData.first_name" name="first_name" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.first_name ? registerError.first_name : '' }}</div>
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">Last Name <span class="text-danger">*</span></label>
                <input type="text" v-model="formRegisterData.last_name" name="last_name" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.last_name ? registerError.last_name : '' }}</div>
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">Username <span class="text-danger">*</span></label>
                <input type="text" v-model="formRegisterData.username" name="username" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.username ? registerError.username : '' }}</div>
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">E-Mail Address <span class="text-danger">*</span></label>
                <input type="email" v-model="formRegisterData.email" name="email" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.email ? registerError.email : '' }}</div>
              <div class="form-group d-flex justify-content-between">
                <label class="control-label">Telephone <span class="text-danger">*</span></label>
                <input type="text" v-model="formRegisterData.mobile" name="mobile" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.mobile ? registerError.mobile : '' }}</div>
            </div>
            <div class="head mt-4">
              <h6>your password</h6>
              <span class="bt-line"></span>
            </div>
            <div class="body">
              <div class="form-group d-flex justify-content-between mb-3">
                <label class="control-label">Password <span class="text-danger">*</span></label>
                <input type="password" v-model="formRegisterData.password" name="password" class="form-control">
              </div>
              <div class="error text-danger">{{ registerError.password ? registerError.password : '' }}</div>
              <div class="form-group d-flex justify-content-between mb-4">
                <label class="control-label">Password Confirm <span class="text-danger">*</span></label>
                <input type="password" v-model="formRegisterData.password_confirm" name="password_confirm"
                  class="form-control">
              </div>
              <div class="form-check">
                <input class="form-check-input" v-model="tokenExpire" name="remember_me" type="checkbox" value="9" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Remmember Me
                </label>
              </div>
            </div>
            <hr>
            <div class="footer font-lato">
              <button type="submit" class="btn-register">REGISTER <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie'

export default {
  name: "AppHeader",
  data() {
    return {
      formRegisterData: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        mobile: '',
        password: '',
        password_confirm: '',
      },
      formLoginData: {
        email: '',
        password: '',
      },
      customerData: {
        token: Cookies.get('token'),
        username: Cookies.get('name'),
      },
      registerError: [],
      loginError: [],

      tokenExpire: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          first_name: this.formRegisterData.first_name,
          last_name: this.formRegisterData.last_name,
          username: this.formRegisterData.username,
          email: this.formRegisterData.email,
          mobile: this.formRegisterData.mobile,
          password: this.formRegisterData.password,
          password_confirm: this.formRegisterData.password_confirm,
        });
        if (response.data.code == 200) {
          // close modal after rejister
          this.closeModal('#register-modal')
          // Save the token and name to cookies
          Cookies.set('token', response.data.data.token, { expires: this.tokenExpire ? 9 : 0.5 })
          Cookies.set('name', response.data.data.username, { expires: this.tokenExpire ? 9 : 0.5 })
          this.customerData.token = response.data.data.token;
          this.customerData.username = response.data.data.usernaem;
          // remove input after sucsses
          this.formRegisterData = []
          // remove error after sucsses
          this.registerError = []
        } else {
          this.registerError = response.data.data;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.formLoginData.email,
          password: this.formLoginData.password,
        });

        if (response.data.code == 200) {
          // close modal after login
          this.closeModal('#login-modal')
          // Save the token and name to cookies
          Cookies.set('token', response.data.data.token, { expires: this.tokenExpire ? 9 : 0.5 })
          Cookies.set('name', response.data.data.username, { expires:  this.tokenExpire ? 9 : 0.5})
          this.customerData.token = response.data.data.token;
          this.customerData.username = response.data.data.usernaem;
          // remove input after sucsses
          this.formLoginData = []
          // remove error after sucsses
          this.loginError = []
        } else {
          this.loginError = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }
    },

    logout() {
      Cookies.remove('token');
      Cookies.remove('name');
      this.customerData.token = null;
      location.reload();
    },

    openModal(modalId) {
      $('.overlay').css('z-index', '99');
      $('.overlay').css('opacity', '.8');
      $(modalId).css('z-index', '100');
      $(modalId + ' .modal-content').css('transform', 'scale(1)');
      $(modalId + ' .modal-content').css('opacity', '1');
    },
    closeModal(modalId) {
      $(modalId + ' .modal-content').css('transform', 'scale(.7)');
      $(modalId + ' .modal-content').css('opacity', '0');
      $(modalId).css('z-index', '-1');
      $('.overlay').css('z-index', '-1');
      $('.overlay').css('opacity', '0');

      // remove input after sucsses
      this.formRegisterData = []
      this.formLoginData = []
      // remove error after sucsses
      this.registerError = []
      this.loginError = []
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 0;
  position: relative;
  background: 0 0;

  // Start Header Top
  .header-top {
    padding: 20px 0 10px;

    ul {
      transform: translateY(1rem);

      li {
        display: inline-block;
        margin: 0 5px;
        font-size: 14px;
        transition: .3s;
        cursor: pointer;

        &:hover {
          color: #0066ff;
        }
      }

      .cyrcle {
        border: 1px solid rgb(224, 224, 224);
        color: rgb(46, 46, 46);
        font-size: 14px;
        border-radius: 50%;
        padding: 3px 7px;
      }
    }

    .header-logo {
      font-size: 35px;
      color: #000000;
      font-weight: 700;

      span {
        font-weight: 600;
        color: #ff1d58;
      }

      img {
        width: 40px;
      }
    }
  }

  // Start Header Bottom
  .header-bottom {
    height: 60px;
    color: rgb(219, 219, 219);
    background: #0049B7;

    .wrapper {
      ul {

        .break-li {
          background: #fff;
          display: inline-block;
          width: 1px;
          height: 10px;
        }

        li {
          display: inline-block;
          margin: 0 30px;

          a {
            color: #fff;
            line-height: 60px;
            font-size: 13px;
            text-transform: uppercase;
            font-weight: 500;
          }
        }
      }
    }
  }

  // Start modal 
  .modal.show .modal-dialog {
    margin-top: 200px;
  }

  .modal {
    z-index: -1;

    .modal-content {
      border-radius: 2px;
      font-size: 14px;
      transform: scale(0);
      transition: .2s ease-in-out;

      .popup-close {
        position: absolute;
        top: -13px;
        right: -13px;
        width: 30px;
        height: 30px;
        border-radius: 50% !important;
        background: #003cff;
        border: 0;
        color: #fff;
        transition: .3s;

        &:hover {
          background: #c90237;
        }
      }

      .head {
        h6 {
          height: 11px;
          text-transform: uppercase;
          font-size: 13px;
          margin: 0;
          color: #1b1b1b;
        }

        .bt-line {
          display: inline-block;
          width: 60px;
          height: 1px;
          position: relative;
          background: #003cff;
        }
      }

      .body {
        .form-group {
          margin: .5rem 0;

          .control-label {
            width: 250px;
            padding-top: 7px;
            padding-bottom: 5px;
            color: #666;
          }

          .form-control {
            background: rgba(245, 245, 245, 1) !important;
            border-width: 1px !important;
            border-style: solid !important;
            border-color: rgba(221, 221, 221, 1) !important;
            border-radius: 2px !important;
            max-width: 500px;
            height: 38px;
            transition: .3s;

            &:focus {
              border: 1px solid #0049B7;
              box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
            }
          }
        }

        .forgot-pass {
          font-size: 13px;
          margin-top: .5rem;
          color: #035bdf;
          transition: .3s;

          &:hover {
            color: #ff1d58;
          }
        }
      }

      hr {
        margin: .6rem 0;
        opacity: .3;
      }

      .footer {

        .btn-login,
        .btn-register {
          width: 100%;
          border: 0;
          background: rgba(48, 56, 65, 1);
          padding: 9px;
          font-size: 12px;
          color: #fff;
          transition: .3s;

          &:hover {
            background-color: #c90237;
          }
        }
      }
    }
  }
}
</style>
