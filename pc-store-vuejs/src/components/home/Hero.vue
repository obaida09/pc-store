<template>
  <div class="hero">
    <div class="container">
      <div class="slider pt-5">
        <div class="slide mt-4">
          <div class="row">
            <div class="col-md-6">
              <img src="@/assets/image/home/hero.png" alt="" />
            </div>
            <div class="col-md-6">
              <div class="content">
                <h1>3D WAVE SOUND</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis saepe facilis explicabo repudiandae minima eos
                  voluptatibus quisquam fugit quasi porro
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
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  background: rgba(76, 90, 128, 0.055);
  min-height: 700px;
  overflow: hidden;
  .slider {
    .slide {
      img {
        width: 80%;
        float: right;
      }
      .content {
        margin-top: 6rem;
        h1 {
          color: #000;
          font-size: 56px;
        }
        p {
          width: 90%;
          color: #555;
          font-size: 12px;
          padding-left: 5px;
          letter-spacing: 1px;
          line-height: 1.3;
        }
        .btn {
          background: #0049b7;
          border: none;
          border-radius: 25px;
          font-size: 12px;
          padding: 8px 30px;
        }
      }
    }
  }
}
</style>
