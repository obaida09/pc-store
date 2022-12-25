<template>
  <div class="topCategory py-5">
    <div class="container">
      <div class="head">
        <h4>TOP CATECORIES THIS MONTH</h4>
        <span class="bt-line"></span>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="categ">
              <img src="@/assets/image/home/categ-1.jpg" alt="" />
              <div class="content">
                <h6>laptops & computers</h6>
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
  name: "topCategory",
};
</script>

<style lang="scss" scoped>
.topCategory {
  background: #4c5a800e;
  height: auto;
  .head {
    margin-top: 150px;
    h4 {
      margin-bottom: 0;
    }
    span {
      display: inline-block;
      width: 99.4%;
      height: 2px;
      position: relative;
      background: #620a8b13;
      &:after {
        content: "";
        position: absolute;
        width: 350px;
        height: 2px;
        background: #0357d4;
      }
    }
  }
  .categ {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    height: 250px;
    img {
      float: left;
    }
    .content {
      h6 {
        text-transform: uppercase;
      }
    }
  }
}
</style>
