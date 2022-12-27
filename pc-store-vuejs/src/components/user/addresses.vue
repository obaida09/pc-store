<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  props: ["userAddresses", "userData"],
  data() {
    return {
      result: '',
    };
  },
  methods: {
    refresh2() {
      this.$emit('refresh', 'refresh2')
    },
    async removeAddress(addressId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/removeAddress?addressId=${addressId}`,
          {
            headers: {
              'Authorization': 'Bearer ' + this.userData.token
            },
          }
        );
        this.result = response.data;
        console.log(response.data)
        if(response.data.code == 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1500,
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <div class="addresses">
    <div class="header py-4">
      <h2>my addresses list <span class="px-1"><i class="fa-solid fa-circle-plus"></i></span></h2>
    </div>
    <ul class="responsive-table mt-4">
      <!-- {{ refresh }}    removeAddress(address.id),  -->
      <li class="table-header">
        <div class="col col-1">#</div>
        <div class="col col-2">Title</div>
        <div class="col col-3">Email</div>
        <div class="col col-4">Mobile</div>
        <div class="col col-5">action</div>
      </li>
      <li class="table-row font-lato" v-for="(address, index) in userAddresses" :key="index">
        <div class="col col-1" data-label="Job Id">{{ index + 1 }}</div>
        <div class="col col-2" data-label="Customer Name">{{ address.address_title }}</div>
        <div class="col col-3" data-label="Amount">{{ address.email }}</div>
        <div class="col col-4" data-label="Payment Status">{{ address.mobile }}</div>
        <div class="col col-5" data-label="Payment Status">
          <a class="btn-show"><i class="fa-solid fa-eye"></i></a>
          <button type="button" @click=" refresh2" class="btn-trash"><i class="fa-regular fa-trash-can"></i></button>
        </div>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
.addresses {
  .header {
    background: #f8f9fa;
    text-align: center;

    h2 {
      font-size: 22px;
      text-transform: uppercase;
    }
    span {
      cursor: pointer;
      transition: .2s;
      &:hover {
        color: #ff1d58;
      }
    }
  }
  .responsive-table {
  li {
    border-radius: 3px;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .table-header {
    background-color: #000000;
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.1);
    .btn-show,.btn-trash {
      background: #ffffff;
      border: none;
      transition: .2s;
      padding: 0 12px;
      &:hover {
        color: #ff1d58;
      }
    }
    .btn-trash {
      color: #ff1d58;
      &:hover {
        color: #fa7095;
      }
    }
  }
  .col-1 {
    flex-basis: 5%;
  }
  .col-2 {
    flex-basis: 30%;
  }
  .col-3 {
    flex-basis: 30%;
  }
  .col-4 {
    flex-basis: 25%;
  }

  
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row{
      
    }
    li {
      display: block;
    }
    .col {
      
      flex-basis: 100%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
}
}
</style>
