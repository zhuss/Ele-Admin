<template>
  <div class="login">
    <div class="login-box">
      <p class="logo"><img src="../../assets/img/ingtu.png" /></p>
      <p class="login-input">
        <input v-model="user.username" type="text" placeholder="账号" name="username">
      </p>
      <p class="login-input">
        <input v-model="user.password" type="password" placeholder="密码" name="password">
      </p>
      <p class="login-input">
        <button @click="login" :disabled="!loginBtnDisabled">LOGIN</button>
      </p>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      loginBtnDisabled() {
        return this.user.username && this.user.password;
      }
    },
    methods: {
      login() {
        this.$router.push({
          name: 'home'
        });
        this.$message.success("欢迎登陆");
      }
    }
}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #1F2D3D;
  position: relative;
  .login-box {
    width: 300px;
    height: 240px;
    padding: 20px;
    border-radius: 6px;
    background: #324057;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .8);
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    .logo {
      width: 50px;
      height: 50px;
      margin: 0 auto 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        box-shadow: 0 0 10px rgba(255, 255, 255, .8);
      }
    }
  }
}

.login-input {
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 40px;
    border: 2px solid #D3DCE6;
    background: transparent;
    color: #D3DCE6;
    outline: none;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 4px;
  }
  button {
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 4px;
    outline: none;
    background: #EEE;
    font-size: 18px;
    color: #1F2D3D;
    cursor: pointer;
    transition: all .2s;
  }
  button:hover {
    background: #FFF;
  }
  button[disabled] {
    background: #CCC;
    color: #999;
  }
  button[disabled]:hover {
    cursor: not-allowed;
    background: #CCC;
    color: #999;
  }
}
</style>
