<template>
  <div class="deal mt-5">
    <div class="container">
      <div class="head">deal of the day <span class="bt-line"></span></div>
      <div class="modal-deal px-4">
        <div class="row">
          <div class="col-md-3">
            <ul>
              <li><span>02</span> days</li>
              <li><span>07</span> hours</li>
              <li><span>23</span> min</li>
              <li><span>46</span> sec</li>
            </ul>
          </div>
          <div class="col-md-5">
            <img src="@/assets/image/home/p1.jpg" alt="" />
          </div>
          <div class="col-md-4">
            <div class="content">
              <span class="cteg-name font-2">ipad pro</span>
              <h3>IPAD PRO 32G GOLD</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur pe
              </p>
              <button type="button" class="btn btn-primary mt-3">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Deal",
};
</script>

<style lang="scss" scoped>
.deal {
  padding-top: 120px;
  background-image: url("@/assets/image/home/deal2.webp"),
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  background-blend-mode: overlay;
  background-size: cover;
  height: 650px;

  .head {
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 70px;
    span {
      display: inline-block;
      width: 50px;
      height: 2px;
      background: #00000013;
    }
  }
  .modal-deal {
    z-index: 1;
    height: 500px;
    background: rgb(255, 255, 255);
    ul {
      margin-top: 7rem;
      margin-left: 20%;
      li {
        margin: 2rem 1rem;
        text-transform: uppercase;
        color: #555;
        span {
          background: #ececee;
          color: #000;
          font-size: 28px;
          border-radius: 50%;
          padding: 10px;
          font-weight: 500;
          margin-right: 7px;
        }
      }
    }
    img {
      width: 450px;
    }
    .content {
      margin-top: 8rem;
      h3 {
        color: #000;
      }
      span {
        color: #0049b7;
        font-size: 20px;
      }
      .btn {
        background: #0049b7;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        padding: 8px 35px;
      }
    }
  }
}
</style>
