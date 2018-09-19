<template>
    <div class="head-nav">
        <el-row>
            <el-col :span="14" class="logo-container">
                <img src="/static/img/admin_logo.png" alt="" />                
            </el-col>
            <el-col :span="8" class="user-container">
                <img src="/static/img/user.png" alt=""  />   
                <span class='username'>{{$store.state.userinfo.userinfo.name}}&nbsp;&nbsp;您好，感谢登录使用</span>
                <i class="fa fa-power-off logout" @click='logout'></i>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
.head-nav {
    background: #FFF;

    .logo-container {
        text-align:left;
        color:#0ac7da;
        font-size:25px;
        img {
            width: 195px;
            height: 80px;
            vertical-align: middle;
        }
    }
    .user-container {
        float: right; text-align: right;
        margin-top: 10px;
        img {
            width: 34px; height:34px;
            border-radius: 34px;
            vertical-align: middle;
        }
    }
    .logout {
        width: 60px; margin-top: 5px; margin-left: 20px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: right;
        cursor: pointer;
        color: #676767; border-left: 1px solid #e4e4e4;
    }
}
.username {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    color: #646464; font-size: 12px;
}
</style>
<script>
module.exports = require('./headNav');
</script>
