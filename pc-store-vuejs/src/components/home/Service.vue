<template>
  <div class="service">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="serve">
            <div class="icon"><i class="fa-solid fa-truck"></i></div>
            <h5>fast delevery</h5>
            <p></p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="serve">
            <div class="icon">
              <i class="fa-solid fa-headphones-simple"></i>
            </div>
            <h5>24/7 support</h5>
            <p></p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="serve">
            <div class="icon"><i class="fa-regular fa-credit-card"></i></div>
            <h5>payment</h5>
            <p></p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="serve">
            <div class="icon"><i class="fa-solid fa-medal"></i></div>
            <h5>trusted</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "service",
};
</script>

<style lang="scss" scoped>
.service {
  margin-top: 5rem;
  .serve {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    h5 {
      text-transform: uppercase;
    }
    .icon {
      margin-right: 2rem;
      font-size: 30px;
      color: #0049b7;
    }
  }
}
</style>
