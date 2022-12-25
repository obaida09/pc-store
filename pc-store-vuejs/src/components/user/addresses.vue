<script>
export default {
  props: ["userAddresses"],
}
</script>

<template>
  <div class="addresses">
    <div class="header py-4">
      <h2>my addresses informaation</h2>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(address, index) in userAddresses" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ address.address_title }}</td>
          <td>{{ address.email }}</td>
          <td>{{ address.mobile }}</td>
        </tr>
      </tbody>
    </table>
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
  }
}
</style>
