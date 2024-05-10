<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">Main</el-main>
            <el-footer>Forter</el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    height: 100vh;
    /* 设置高度为视窗的100% */
}

/* 设置容器样式 */
.el-container {
    width: 100%;
    /* 设置宽度为100% */
    height: 100%;
    /* 设置高度为100% */
}

/* 设置头部样式 */
.header {
    background-color: #409eff;
    /* 设置背景颜色 */
    color: white;
    /* 设置文字颜色 */
    text-align: center;
    /* 文字居中 */
    line-height: 60px;
    /* 设置行高 */
}

/* 设置主体样式 */
.main {
    padding: 20px;
    /* 设置内边距 */
}
</style>