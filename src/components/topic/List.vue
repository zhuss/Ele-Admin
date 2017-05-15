<template>
  <div class="topic">
    <!--top-->
    <div class="top">
      <el-form :model="search" :inline="true">
        <el-form-item>
          <el-input icon="search" placeholder="主题关键字搜索"></el-input>
        </el-form-item>
        <!--form只有一个input的时候enter会刷新页面-->
        <el-form-item v-show="false">
          <el-input icon="search" placeholder="主题关键字搜索"></el-input>
        </el-form-item>
        <!--end-->
        <el-form-item>
          <el-button icon="search">搜索</el-button>
          <el-button icon="plus">创建</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--top end-->
    <div class="table">
      <el-table>
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column label="主题名称"></el-table-column>
      </el-table>
      <div class="page">
        <el-pagination :page-size="50" layout="total, prev, pager, next" :total="500"></el-pagination>
      </div>
    </div>
  </div>
</template>
