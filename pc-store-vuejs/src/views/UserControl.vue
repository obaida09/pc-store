<script>
import axios from "axios";
import Cookies from 'js-cookie';
import profile from "../components/user/Profile.vue";
import addresses from "../components/user/addresses.vue";

export default {
  components: {
    profile,
    addresses,
  },
  created() {
    this.getProfile();
    this.getAddresses();
  },
  data() {
    return {
      userInformation: {},
      userAddresses: {},
      getComponents: 'dashboard',
      userData: {
        token: Cookies.get('token'),
        username: Cookies.get('name'),
      },
    };
  },
  methods: {
    async getProfile() {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/profile',
          {
            headers: {
              'Authorization': 'Bearer ' + this.userData.token
            },
            params: {
              username: this.userData.username,
            }
          }
        );
        this.userInformation = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAddresses() {
      try {
        const response = await axios.get(
          'http://127.0.0.1:8000/api/addresses',
          {
            headers: {
              'Authorization': 'Bearer ' + this.userData.token
            },
            params: {
              username: this.userData.username,
            }
          }
        );
        this.userAddresses = response.data.data;
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  }
}

</script>

<template>
  <div class="customer-account mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="content">
            <div v-if="getComponents == 'dashboard'"></div>
            <div v-else-if="getComponents == 'profile'">
              <profile :userInformation="this.userInformation"/>
            </div>
            <div v-else-if="getComponents == 'addresses'">
              <addresses :userAddresses="this.userAddresses"/>
            </div>
            <div v-else-if="getComponents == 'orders'"></div>
            <div v-else=""></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="navigation p-4">
            <h5 class="mt-2">navigation</h5>
            <ul class="font-lato mt-4">
              <li @click="this.getComponents = 'dashboard'" :class='getComponents == "dashboard" ? "active" : ""'>
                Dashboard</li>
              <li @click="this.getComponents = 'profile'" :class='getComponents == "profile" ? "active" : ""'>Profile
              </li>
              <li @click="this.getComponents = 'addresses'" :class='getComponents == "addresses" ? "active" : ""'>
                Addresses</li>
              <li @click="this.getComponents = 'orders'" :class='getComponents == "orders" ? "active" : ""'>Orders</li>
              <li @click="this.getComponents = 'logout'">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer-account {
  .navigation {
    background: #f8f9fa;
    text-transform: uppercase;

    h5 {
      color: #0049b7;
    }

    ul {
      li {
        color: #1b1b11;
        font-weight: 700;
        margin: 1rem 0;
        padding: .5rem 2rem;
        cursor: pointer;
        transition: .2s;

        &:hover {
          color: #000000a9;
        }
      }

      li.active {
        color: #fff;
        background-color: #ff1d58;
      }
    }
  }

  .content {
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
          width: 200px;
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
          font-size: 14px;
          color: #666;

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
      margin: 1rem 0;
      opacity: .3;
    }

    .footer {

      .btn-update {
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
</style>