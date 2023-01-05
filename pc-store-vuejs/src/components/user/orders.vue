<script>

export default {
  props: ["userOrders", "userData"],
}
</script>

<template>
  <div class="addresses">
    <div class="header py-4">
      <h2>my orders list</h2>
    </div>
    <ul class="responsive-table mt-4">
      <!-- {{ refresh }}    removeAddress(address.id),  -->
      <li class="table-header">
        <div class="col col-1"># ref</div>
        <div class="col col-2">Sub Total</div>
        <div class="col col-3">total</div>
        <div class="col col-4">discount</div>
        <div class="col col-5">status</div>
      </li>
      <li class="table-row font-lato" v-for="(order, index) in userOrders" :key="index">
        <div class="col col-1" data-label="Job Id">{{ order.ref_id }}</div>
        <div class="col col-2" data-label="Customer Name">{{ order.subtotale }} $</div>
        <div class="col col-3" data-label="Amount">{{ order.total }} $</div>
        <div class="col col-4" data-label="Payment Status">{{ order.discount == 0  ? 'None': order.discount }}</div>
        <div class="col col-5" data-label="Payment Status">{{ order.order_status }}</div>
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
    flex-basis: 30%;
  }
  .col-2 {
    flex-basis: 20%;
  }
  .col-3 {
    flex-basis: 20%;
  }
  .col-4 {
    flex-basis: 20%;
  }
  .col-5 {
    flex-basis: 20%;
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
