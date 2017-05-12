<template>
  <div class="home">
    <!--left-->
    <div class="left">
      <div class="user">
        <img class="head-icon" src="../../assets/img/ingtu.png" />
        <p class="user-name overflow">ingtube.com</p>
      </div>
      <el-menu default-active="1-1" :unique-opened="true" theme="dark">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-picture"></i>主要业务</template>
          <el-menu-item index="1-1">视频管理</el-menu-item>
          <el-menu-item index="1-2">主题管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-date"></i>运营业务</template>
          <el-menu-item index="2-1">每日精选</el-menu-item>
          <el-menu-item index="2-2">日签管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!--left end-->
    <!--right-->
    <div class="right">
      <!--header-->
      <div class="header">
        <h1 class="title">映兔管理后台</h1>
        <div class="menu">
          <el-dropdown @command="handleCommand" trigger="click">
            <p class="el-dropdown-link">{{user.userName}}<img src="../../assets/img/ingtu.png" /></p>
            <el-dropdown-menu slot="dropdown" style="font-size: 12px;">
              <el-dropdown-item command="info"><i class="el-icon-information"></i> 个人信息</el-dropdown-item>
              <el-dropdown-item command="edit"><i class="el-icon-edit"></i> 编辑信息</el-dropdown-item>
              <el-dropdown-item command="out"><i class="el-icon-circle-cross"></i> 注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!--header end-->
      <!--content-->
      <div class="content">
        <router-view></router-view>
      </div>
      <!--content end-->
    </div>
    <!--right end-->
    <!--userinfo-->
    <el-dialog v-model="userInfo.dialog" title="个人信息">
    </el-dialog>
    <!--userinfo end-->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
      return {
        user: {
          headIcon: 'http://cdn.bunny-tech.com/promotion/static/act-imags/icon.png',
          userName: 'zhuss'
        },
        userInfo: {
          dialog: false
        }
      }
    },
    methods: {
      handleCommand(command) {
        if (command == 'info') {
          this.userInfo.dialog = true;
        } else if (command == 'out') {
          this.logout();
        }
      },
      logout() {
        this.$router.push({
          name: 'login'
        });
      }
    }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  background: #EEE;
}

.left {
  width: 200px;
  height: 100%;
  background: #324157;
  .user {
    width: 100%;
    padding-top: 20px;
    text-align: center;
    border-bottom: 2px solid #1f2d3d;
    .head-icon {
      width: 60px;
      height: 60px;
      border-radius: 80px;
      background: #FFF;
    }
    .user-name {
      color: #bfcbd9;
      padding: 10px;
    }
  }
  .user:hover {
    background: #475669;
  }
}

.right {
  flex: 1;
  position: relative;
}

.header {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 80px;
  background: #1f2d3d;
  color: #bfcbd9;
  display: flex;
  .title {
    flex: 1;
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    font-size: 18px;
  }
  .menu {
    height: 40px;
    line-height: 40px;
    padding: 20px;
    .el-dropdown-link {
      cursor: pointer;
      color: #bfcbd9;
      img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        vertical-align: middle;
        margin-left: 10px;
        box-shadow: 0 0 10px #FFF;
      }
    }
  }
}

.content {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  box-sizing: border-box;
  top: 0;
  position: absolute;
}
</style>
