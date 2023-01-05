<script>
export default {
  props: ["userInformation"],
  data() {
    return {
      user: {
        first_name: this.userInformation[0].first_name,
        last_name: this.userInformation[0].last_name,
        username: this.userInformation[0].username,
        email: this.userInformation[0].email,
        mobile: this.userInformation[0].mobile,
      }
    }
  }
}
</script>

<template>
  <div class="profile">
    <div class="header py-4">
      <h2>my account informaation</h2>
    </div>
    <form @submit.prevent="register">
      <div class="head mt-4 pt-2">
        <h6>your personal details</h6>
        <span class="bt-line"></span>
      </div>
      <div class="body font-lato mt-2 pe-4">
        <div class="form-group d-flex justify-content-between">
          <label class="control-label">First Name <span class="text-danger">*</span></label>
          <input type="text" name="first_name" v-model='this.user.first_name' class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
        <div class="form-group d-flex justify-content-between">
          <label class="control-label">Last Name <span class="text-danger">*</span></label>
          <input type="text" name="last_name" v-model='this.user.last_name' class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
        <div class="form-group d-flex justify-content-between">
          <label class="control-label">Username <span class="text-danger">*</span></label>
          <input type="text" name="username" v-model='this.user.username' class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
        <div class="form-group d-flex justify-content-between">
          <label class="control-label">E-Mail Address <span class="text-danger">*</span></label>
          <input type="email" name="email" v-model='this.user.email' class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
        <div class="form-group d-flex justify-content-between">
          <label class="control-label">Telephone <span class="text-danger">*</span></label>
          <input type="text" name="mobile" v-model='this.user.mobile' class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
      </div>
      <div class="head mt-4 pt-2">
        <h6>reset password</h6>
        <span class="bt-line"></span>
      </div>
      <div class="body font-lato mt-2 pe-4">
        <div class="form-group d-flex justify-content-between mb-3">
          <label class="control-label">New Password</label>
          <input type="password" name="password" class="form-control">
        </div>
        <!-- <div class="error text-danger">{{ 'fail' }}</div> -->
        <div class="form-group d-flex justify-content-between mb-3">
          <label class="control-label">New Password Confirm</label>
          <input type="password" name="password_confirm" class="form-control">
        </div>
      </div>
      <hr>
      <div class="footer font-lato">
        <button type="submit" class="btn-update">Update &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  .header {
    background: #f8f9fa;
    text-align: center;
    h2 {
      font-size: 22px;
      text-transform: uppercase;
    }
  }
  form {
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