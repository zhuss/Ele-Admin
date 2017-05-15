<template>
  <div class="video">
    <!--top-->
    <div class="top">
      <el-form :model="search" :inline="true">
        <el-form-item>
          <el-select v-model="search.isOnline" placeholder="请选择">
            <el-option label="全部" :value="-1"></el-option>
            <el-option label="上线" :value="1"></el-option>
            <el-option label="下线" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="search.cate" :clearable="true" placeholder="请选择类目">
            <el-option-group v-for="group in cate" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.categoryId" :label="item.name" :value="item.categoryId">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input icon="search" placeholder="视频关键字搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--top end-->
    <!--table-->
    <div class="table">
      <el-table :data="list.videos" :height="tableHeight">
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column label="视频标题">
          <template scope="scope">
            <p>{{scope.row.videoName}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template scope="scope">
            <p>
              <el-button size="small" icon="edit">编辑</el-button>
              <el-button size="small" icon="delete">删除</el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination :page-size="50" layout="total, prev, pager, next" :total="500"></el-pagination>
      </div>
    </div>
    <!--table end-->
  </div>
</template>
<script type="text/javascript">
import cate from '../../lib/cate'
export default {
  computed: {
    tableHeight() {
      return document.body.offsetHeight - 250;
    }
  },
  data() {
    return {
      cate: cate.categorys,
      search: {
        isOnline: -1,
        cate: ""
      },
      list: {
        count: 10,
        videos: [{
          videoName: '鸭脖鸭脚肯定是很多人的最爱。我也是超爱，尤其夏天一定要卤上一些，它是最强的下酒菜。自'
        }, {
          videoName: '鸭脖鸭脚肯定是很多人的最爱。我也是超爱，尤其夏天一定要卤上一些，它是最强的下酒菜。自'
        }]
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
